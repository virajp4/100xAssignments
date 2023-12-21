const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/04-mongo-auth");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    purchasedCourses: [
        {
          type: mongoose.Types.ObjectId,
          ref:'Course',
        },
      ],
});

const CourseSchema = new mongoose.Schema({
    courseId:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
    },
    imageLink:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
