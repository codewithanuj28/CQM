const express = require("express");
const user = require('../models/userModel');
const adm = require('../models/adminModel');
const que = require("../models/querySchema");

const router = express.Router();

// routing
router.get('/',async (req,res)=>{
    const alluser=await user.find();
    return res.send(alluser)
});

router.get('/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await user.findById(id);
    return res.send(a)
})

router.patch('/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await user.findByIdAndUpdate(id,req.body);
    return res.send(a)
})

router.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await user.findByIdAndDelete(id);
    return res.send(a)
})

router.post("/",async (req,res)=>{
    console.log(req.body);

    const {firstname,lastname,email,Password,username} =req.body;
    const r =await user.create({
        firstname:firstname,
        lastname:lastname,
        username:username,
        email:email,
        Password:Password
    },);
    

    
    return res.send({msg : "success"})
})

router.post("/cust", async (req,res)=>{
    const {username,password}=req.body;
    const result= await user.findOne({username:username});
    if (result){
        if(result.Password==password){
            return res.send({message:"Login Success",res:result})
        }
        else{
            return res.send({message:"Invalid password"})
        }
    }
    else{
        return res.send({message:"Invalid Username"})
    }

    res.end ();
});
router.post("/admin", async (req,res)=>{
    const {username,Password}=req.body;
    const result= await adm.findOne({username:username});
    if (result){
        if(result.Password==Password){
            return res.send({message:"Login Success"})
        }
        else{
            return res.send({message:"Invalid password"})
        }
    }
    else{
        return res.send({message:"Invalid Username"})
    }

    res.end ();
});
router.get("/xxxx", async (req, res) => {
    try {
      const totalquery = await que.countDocuments({});
      const countpenQuery = await que.countDocuments({ status: "p" });
      const countproQuery = await que.countDocuments({ status: "pro" });
      const countcomQuery = await que.countDocuments({ status: "c" });
      return res.send({
        msg: "success from abc",
        totalquery: totalquery,
        totalpenquery: countpenQuery,
        totalproquery: countproQuery,
        totalcomquery: countcomQuery,
      });
    } catch (e) {
      return res.json({ msg: "Found Error", error: e });
    }
  });
  

module.exports=router;