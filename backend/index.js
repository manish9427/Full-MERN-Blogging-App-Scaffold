// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/auth");
// const blogRoutes = require("./routes/blogs");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/blogs", blogRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
//   .catch(err => console.error(err));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blogs");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

module.exports = app; // <-- export app, don't app.listen()

