const BusinessPost = require("../models/BusinessModel.js");

async function addBusinessPost(req, res, next) {
  try {
    const { name, description, category } = req.body;
    console.log(req.user);

    const businessPost = new BusinessPost({
      name,
      description,
      category,
      owner: req.user.userId,
    });

    const response = await businessPost.save();
    res.json({ message: response });
  } catch (error) {
    next(error);
  }
}

async function getAllBusinessPost(req, res, next) {
  try {
    const posts = await BusinessPost.find().populate("owner", "name");

    res.json(posts);

    next();
  } catch (error) {
    next(error);
  }
}

const getBusinessPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await BusinessPost.findById(id)
      .populate("owner", "name")
      .populate("subscribers", "name");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = { addBusinessPost, getAllBusinessPost, getBusinessPostById };
