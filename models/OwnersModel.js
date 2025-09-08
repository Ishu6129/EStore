const mongoose=require('mongoose');


const ownerSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
    },
    email:String,
    password:String,
    isAdmin:Boolean,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:String
})

module.exports=mongoose.model('User',ownerSchema)

