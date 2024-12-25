const BusinessPost = require("../models/BusinessModel.js");

async function addBusinessPost(req, res, next) {
  try {
    const { name, description, category, owner } = req.body;
    console.log(req.user);

    const businessPost = new BusinessPost({
      name,
      description,
      category,
      owner,
    });

    const response = await businessPost.save();
    res.json({ message: response });
  } catch (error) {
    next(error);
  }
}

async function getAllBusinessPost(req, res, next) {
  try {
    const posts = await BusinessPost.find();

    res.json(posts);

    next();
  } catch (error) {
    next(error);
  }
}

async function getBusinessPostById(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await BusinessPost.findById(postId);

    res.json({ post: post });

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { addBusinessPost, getAllBusinessPost, getBusinessPostById };
