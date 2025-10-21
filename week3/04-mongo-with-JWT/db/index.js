const mongoose= require('mongoose');

// establishing connection
mongoose.connect('mongodb+srv://gauravgoswami1304_db_user:R4o0euNeqarofyvf@cluster0.di26mr1.mongodb.net/course-jwt_selling_app');

// define schemas
const AdminSchema=new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

// saving the models to export em'

const Admin=mongoose.model('Admin',AdminSchema);
const User=mongoose.model('User',UserSchema);
const Course=mongoose.model('Course',CourseSchema);

module.exports={
    Admin,
    User,
    Course
}
