const express = require("express");
const adminMiddeware = require("../middlewares/admin");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middlewares/admin");
const router = express.Router();

router.post("/signup", async function (req, res) {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username: username,
    password: password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddeware, async function (req, res) {
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    const newCourse=await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message:'Course created successfully',courseId:newCourse._id
    })
});

router.get('/courses',adminMiddleware,async function(req,res){
    const response=await Course.find({});
    res.json({
        course:response
    })
})
module.exports=router;
