const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    username: req.body.username,
    password: req.body.password,
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({ courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const course = await Course.findById(req.params.courseId);
  const newUser = await User.findByIdAndUpdate(req.params.userId, {
    $push: { purchasedCourses: course },
  });
  res.json({ message: "Course purchased successfully", course });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findById(req.params.userId);
  const courses = user.populate(purchasedCourses);
  res.json({ courses });
});

module.exports = router;
