const Blog = require("../models/blog");

module.exports.getAllBlogs = async (req, res) => {
  try {
    const data = await Blog.find({});
    res.status(200).json({ data, success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occured while fetching data!" });
  }
};

module.exports.getBlog = async (req, res) => {
  try {
    const data = await Blog.findById(req.params.id);
    res.status(200).json({ data, success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occured while fetching data!" });
  }
};

module.exports.createBlog = async (req, res) => {
  try {
    const { imageUrl, title, content, summary } = req.body;
    const newBlog = new Blog({ imageUrl, title, content, summary });

    await newBlog.save();
    res.status(200).json({ newBlog, success: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occured while creating the blog!" });
  }
};
