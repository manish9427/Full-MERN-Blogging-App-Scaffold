import { useEffect, useState } from "react";
import { getBlogs } from "../services/blogs";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await getBlogs(token);
        setBlogs(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div className="loading">Loading blogs...</div>;

  return (
    <div className="blogs-container">
      <h2>All Blogs</h2>
      {error && <div className="error-message">{error}</div>}
      {blogs.length === 0 ? (
        <p>No blogs available yet.</p>
      ) : (
        <div className="blogs-grid">
          {blogs.map((b) => (
            <div key={b._id} className="blog-card">
              <h3>{b.title}</h3>
              <p>{b.content.substring(0, 150)}...</p>
              <small>By {b.author}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
