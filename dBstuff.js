const mongoose=require("mongoose");


const MySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        

    },
    description:{
        type:String,
       

    },
    image:{
        type:String,
       
    }
})
const logSchema=mongoose.Schema({
    name:{
        type:String
       
    },
    description:{
        type:String,
       

    },
    image:{
        type:String,
       
    }
})
exports.Mymodel = mongoose.model('assignment',MySchema,"assignment");
exports.LogModel = mongoose.model('work',logSchema);
