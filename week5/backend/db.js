const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://gauravgoswami1304_db_user:R4o0euNeqarofyvf@cluster0.di26mr1.mongodb.net/todos');
const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}
