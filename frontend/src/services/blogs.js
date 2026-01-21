import apiClient from "./apiClient";

export const getBlogs = (token) => {
  const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
  return apiClient.get("/blogs", config);
};

export const createBlog = (blogData, token) =>
  apiClient.post("/blogs", blogData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const myBlogs = (token) =>
  apiClient.get("/blogs/my", {
    headers: { Authorization: `Bearer ${token}` },
  });
