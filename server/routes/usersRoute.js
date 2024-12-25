const express = require("express");
const {
  getAllUsers,
  addUser,
  login,
  catchAll,
} = require("../controllers/usersController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.get(
  "/",
  //  authUser,
  getAllUsers
);

router.post("/signup", addUser);

router.post("/login", login);

router.use(catchAll);

module.exports = router;
