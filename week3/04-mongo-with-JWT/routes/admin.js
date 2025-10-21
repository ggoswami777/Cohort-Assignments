const {Router}=require("express");
const adminMiddleware=require("../middlewares/admin");
const {Admin,Course}=require("../db");
const {JWT_SECRET}=require("../config");
const router=Router();
const jwt=require("jsonwebtoken");

// Admin routes
router.get("/test", (req, res) => {
  res.json({ message: "Admin router working ✅" });
});

router.post('/signup',async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    await Admin.create({
        username:username,
        password:password
    })

    res.json({
        message:'Admin created successfully'
    })
});

router.post('/signin',async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    console.log(JWT_SECRET);

    const admin=await Admin.find({
        username,
        password
    })
    if(admin){
        const token=jwt.sign({username},JWT_SECRET);
        res.json({
            token
        })
    } else{
        res.status(411).json({
            message:"Incorrect email and pass"
        })
    }
})


router.post('/courses',adminMiddleware,async (req,res)=>{
    const title=req.body.title;
    const description=req.body.desciption;
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
})
router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })

});


module.exports = router;