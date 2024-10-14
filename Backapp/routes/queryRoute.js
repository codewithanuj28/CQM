const express = require("express");
const que = require('../models/querySchema');
const user = require('../models/userModel');
const Router =express.Router();
const Qrouter =express.Router();
// routing

Router.get('/pq/:id',async (req,res)=>{
    const id = req.params.id;
    const a=await que.find({uid:id,status:'p'});
    return res.send(a)
})
Router.get('/pro/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await que.find({uid:id,status:'pro'});
    return res.send(a)
})
Router.get('/com/:id',async (req,res)=>{
    const id=req.params.id;
    const a=await que.find({uid:id,status:'c'});
    return res.send(a)
})




Router.post("/addquery",async (req,res)=>{
    console.log(req.body);
    const {department,subject,query,id} =req.body;
    const r = await que.create({
        department:department,
        subject:subject,
        query:query,
        uid:id,
        status:'p'
    });
    return res.send({msg : "success"})
})


Router.get("/status/:status", async (req, res) => {
    const status = req.params.status;
    const Queries = await que.find({ status: status });
   return res.json({msg:"Succes",q:Queries});
    
  });
  
  Router.get("/id/:id", async (req, res) => {
    const id = req.params.id;
    const Query = await que.findById(id);
  
    return res.send({msg:"Success",q:Query});
  });
  
  Router.patch("/:id", async (req, res) => {
    // const id = req.params.id;
    // const Query = await que.findById();
    try {
      if (Query.status == "p") {
        Query.status = "pro";
      }
      if (Query.status == "p") {
        Query.status = "pro";
      }
      return res.json({ msg: "success" });
    } catch (error) {
      return res.json({ msg: "fail" });
    }
  });
  
 


module.exports=Router;