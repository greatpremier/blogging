const Blog = require('../models/Blog');

// Fetch all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create new blog
exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const blog = new Blog({ title, content, author: req.user.id });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
