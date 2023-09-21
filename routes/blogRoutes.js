const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/getAllBlogs", blogController.getAllBlogs);

router.get("/getBlog", blogController.getBlog);

router.post("/createBlog", blogController.createBlog);

module.exports = router;
