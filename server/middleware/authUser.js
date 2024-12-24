const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function parseCookie(cookie) {
  try{

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
    } catch (error){
      console.log(error);
      return null;
    }
}

async function authUser(req, res, next) {
    try {
        let token;
        if(req.headers.jwtAuthorization){
            token = req.headers.jwtAuthorization;
        }
        else{
            const cookieObject = parseCookie(req.headers.cookie);
            token = cookieObject.jwt;
        }
        const decoded = await jwt.verify(token, "secretKey");
    if (decoded) {
      req.user = decoded.user;
      console.log("authUser says: request by user:", decoded.user);
      next();
    } else {
      //this is never reached. jsonwebtoken.verify throws an error if it fails. the catchall
      //error handler could have a check for jsonwebtoken error type and proper handling.
      //or I could add it before the next(error) in the catch section so if the error
      //is of a known type it will be handled right here.
      console.log("authUser stopped the request...");
      return res.status(400).json({ message: "invalid token..." });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { authUser };
