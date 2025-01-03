const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/UserModel.js");

const secretKey = "secretKey";

// Get All Users
const getAllUsers = async function (req, res, next) {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    next(error);
  }
};

// Add New Users
async function addUser(req, res, next) {
  try {
    const { name, username, password, email, plan, role, imageUrl } = req.body;
    // check if some required fields miss and bring message
    if (!name || !username || !password || !email) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided." });
    }
    // crate hashed password
    const hashedPass = await bcrypt.hash(password, 10);

    //create the new user.
    const user = new User({
      name,
      username,
      password: hashedPass,
      email,
      plan,
      role,
      imageUrl,
    });

    const newUser = await user.save();

    const { password: _, ...newUserWithoutPassword } = newUser.toObject();
    res.status(201).json({ mongoMessage: newUserWithoutPassword });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Username or email already exists." });
    }
    next(error);
  }
}

// login function
async function login(req, res, next) {
  try {
    const { username, password } = req.body; //extract user name and password from the req
    if (!username || !password)
      return res
        .status(400)
        .json({ message: "username and password are required..." });
    const storedUser = await User.findOne({ username: username }); //check if the user exists and extract it from the db
    if (!storedUser)
      return res
        .status(400)
        .json({ message: `could not find user ${username}` });
    const isValid = bcrypt.compareSync(password, storedUser.password); //use bcrypt to test if the login password matches the stored one
    if (!isValid)
      return res.status(400).json({ message: "Invalid password..." });
    const token = jwt.sign(
      //generate a jwt token with payload containing the username, userId, and user role.
      {
        user: {
          username,
          userId: storedUser._id,
          email: storedUser.email,
          imageUrl: storedUser.imageUrl,
          plan: storedUser.plan,
        },
      }, //this is the payload
      secretKey,
      { expiresIn: "1h" }
    );
    console.log("a user has logged in...");
    res
      .cookie("jwt", token, {
        //attach the jwt token to the response's cookie.
        httpOnly: false,
        secure: true, // Ensure the cookie is sent over HTTPS.(Do I need it to be true? I think we're sending http requests...)
        sameSite: "strict", // Prevent cross-site requests.(Probably depends on the CORS middleware to define the allowed origin)
        maxAge: 3600000, // Cookie lifespan of 1 hour (in milliseconds).
      })
      .status(200)
      .json({ message: `User ${username} logged in successfully.`, token });
  } catch (error) {
    next(error);
  }
}

async function catchAll(err, req, res, next) {
  res.status(500).send("something went wrong in the server...");
}

module.exports = { addUser, getAllUsers, login, catchAll };
