const jwt = require("jsonwebtoken");

function parseCookie(cookie) {
  try {
    let result = {};
    // console.log("cookie: ", cookie);
    const cookies = cookie.split("; ");
    // console.log("cookies",cookies);
    cookies.forEach((cookie) => {
      const pair = cookie.split("=");
      result[`${pair[0]}`] = pair[1];
    });
    // console.log("cookie parser result:",result);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function authUser(req, res, next) {
  try {
    let token;

    const cookieObject = parseCookie(req.headers.cookie);
    token = cookieObject.jwt;

    const decoded = await jwt.verify(token, "secretKey");
    if (decoded) {
      console.log(decoded);

      req.user = decoded.user;
      console.log("authUser says: request by user:", decoded.user);
      next();
    } else {
      console.log("authUser stopped the request...");
      return res.status(400).json({ message: "invalid token..." });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authUser };
