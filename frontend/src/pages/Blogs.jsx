import { useState, useEffect } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import BlogCard from "../components/BlogCard";
import api from "../services/api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.get("/blogs", { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await api.post("/blogs",
        { title, content, author: "Manish" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBlogs([...blogs, res.data]);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Blogs</Typography>
      <form onSubmit={handleCreate}>
        <TextField fullWidth label="Title" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ mb: 2 }} />
        <TextField fullWidth multiline rows={4} label="Content" value={content} onChange={(e) => setContent(e.target.value)} sx={{ mb: 2 }} />
        <Button type="submit" variant="contained">Add Blog</Button>
      </form>
      {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
    </Container>
  );
}
