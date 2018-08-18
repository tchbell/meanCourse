const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
    posts: post
  });
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "f2ists",
      title: "First server-side-post",
      content: "This is coming from the server"
    },
    {
      id: "sdfalkj3sdf",
      title: "Second server-side-post",
      content: "This is coming from the server!"
    }
  ];
  return res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts
  });
});

module.exports = app;
