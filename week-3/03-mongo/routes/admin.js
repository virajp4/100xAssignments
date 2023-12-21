const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password,
    });
    res.json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    });
    res.json({ message: 'Course created successfully', courseID: course._id });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({ courses });
});

module.exports = router;