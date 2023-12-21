const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  User.create({ username, password }, (err, user) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "User created successfully" });
    }
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const user = User.findOne({ username, password }, (err, user) => {
    if (err) {
      res.status(500).json({ message: "Internal Server Error" });
    } else if (!user) {
      res.status(403).json({ message: "Forbidden" });
    } else {
      const token = jwt.sign({ username, password }, "secret");
      res.status(200).json({ message: "User signed in successfully", token });
    }
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find({})
    .then((courses) => {
      res.status(200).json({ courses });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const course = Course.getById(courseId);
  User.findByIdAndUpdate(req.user._id, { $push: { purchasedCourses: course } })
    .then((course) => {
      res.json({ message: "Course purchased successfully", course });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
  const { userID } = req.user.id;
  User.findById(userID)
    .populate("purchasedCourses")
    .then((courses) => {
      res.json({ courses });
    })
    .catch((err) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
});

module.exports = router;
