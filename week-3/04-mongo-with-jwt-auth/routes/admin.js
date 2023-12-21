const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const Admin = require("../db/index");
const Course = require("../db/index");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = new Admin({ username, password });
  admin.save((err, admin) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Admin created successfully" });
    }
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = Admin.findOne({ username, password }, (err, admin) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else if (!admin) {
      res.status(403).json({ message: "Forbidden" });
    } else {
      const token = jwt.sign({ username, password }, "secret");
      res.status(200).json({ message: "Admin signed in successfully", token });
    }
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { courseId, title, description, price, imageLink, published } = req.body;
  const course = new Course({ courseId, title, description, price, imageLink, published });
  course.save((err, course) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Course created successfully" });
    }
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const courses = Course.find({}, (err, courses) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json({ courses });
    }
  });
});

module.exports = router;
