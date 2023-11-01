const express=require('express');
const router=express.Router();
const {LogModel}= require('../models/dBstuff');
const {Mymodel}= require('../models/dBstuff');


router.get("/",async(req,res)=>{
    const Prod_list =await  LogModel.find();
    res.json(Prod_list);
});


// router.get("/",async(req,res)=>{
//     const Prod_list =await  LogModel.find(req.query);
//     res.json(Prod_list);
// });

router.post("/",(req,res)=>{
    //console.log(req);

    const product =new  Mymodel({
        name: req.body.name,
        description:req.body.description,
        image:req.body.image,
        
       })
       product.save().then((CreatedProduct =>{
    res.status(201).json(CreatedProduct)
       })).catch((err)=>res.status(500).json({
        error:err,
        success:false 
    
       }))
})











module.exports=router;