import axios from "axios";

const api = axios.create({
  baseURL: "https://full-mern-blogging-app-scaffold.vercel.app", // backend URL
});

export default api;
