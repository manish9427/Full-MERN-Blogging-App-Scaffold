const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get all blogs
router.get("/", auth, async (req, res) => {
  const { category, author } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (author) filter.author = author;
  const blogs = await Blog.find(filter);
  res.json(blogs);
});

// Create blog
router.post("/", auth, async (req, res) => {
  const { title, category, content, image } = req.body;
  const blog = await Blog.create({
    title,
    category,
    content,
    image,
    author: req.user.id,
    userId: req.user.id
  });
  res.status(201).json(blog);
});

// Update blog
router.put("/:id", auth, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.userId.toString() !== req.user.id)
    return res.status(403).json({ error: "Not authorized" });

  Object.assign(blog, req.body, { updatedAt: Date.now() });
  await blog.save();
  res.json(blog);
});

// Delete blog
router.delete("/:id", auth, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog || blog.userId.toString() !== req.user.id)
    return res.status(403).json({ error: "Not authorized" });

  await blog.deleteOne();
  res.json({ message: "Blog deleted" });
});

module.exports = router;
