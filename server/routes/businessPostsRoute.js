const express = require("express");

const {
  addBusinessPost,
  getAllBusinessPost,
  getBusinessPostById,
} = require("../controllers/businessPostsController.js");
const { authUser } = require("../middleware/authUser.js");

const router = express.Router();

router.use("/", authUser);

router.get("/", getAllBusinessPost);

router.post("/", authUser, addBusinessPost);

router.get("/:businessPostId", getBusinessPostById);

module.exports = router;
