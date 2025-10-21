const {Router, response}=require("express");
const jwt=require("jsonwebtoken");
const {User,Course}=require('../db');
const {JWT_SECRET}=require("../config");
const userMiddleware=require("../middlewares/user");

const router=Router();

router.post('/signup',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const existingUser=await User.findOne({
        username
    });
    if(existingUser){
        return res.status(400).json({messsage:"User already Exist"});
    }
    // new user
    await User.create({
        username,
        password,
    })
    res.json({
        message:"User created successfully"
    })
})


router.post('/signin',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const user=await User.findOne({username,password});
    if(user){
        const token=jwt.sign({username},JWT_SECRET);
        res.json({
            token,
            message:"Sign in Successfully"
        })
    }
})

router.get('/courses',async(req,res)=>{
    const courses=await Course.find({});
    res.json({
        courses,
    })
})

router.post("/courses/:courseId",userMiddleware,async (req,res)=>{
    const courseId=req.params.courseId;
    const username=req.username;
    const user=await User.findOne({username});
    if(!user){
        return res.status(403).json({message:"User not found"});
    }
    user.purchasedCourses.push(courseId);
    await user.save();
    res.json({
        message:"Course purchased successfully",
    })
})

router.get("/purchasedCourses",userMiddleware,async (req,res)=>{
    const username=req.username;
    const user=await User.findOne({username}).populate("purchasedCourses");
    if(!user){
        return res.status(403).json({message:"User not found"});
    }
    res.json({
        purchasedCourses:user.purchasedCourses,
    })
})
module.exports=router