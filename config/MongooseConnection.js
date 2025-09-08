const mongoose=require('mongoose')

mongoose
.connect('mongodb://localhost:27017/Estore')
.then(()=>{
    console.log('Connected to MongoDB Successfully ✅');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})

module.exports=mongoose.connection;