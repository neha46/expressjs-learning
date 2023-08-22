 import express from 'express'
 const allStudent=(req,res,next)=>{// routes
    console.log(req.params);
    const {id}=req.params
    console.log(id);
    if(id==1111)
    {
        console.log(`${id} is matched`);
        res.send(`${id} is matched by if`)
    }

     console.log(`${id} is matched`);
        res.send(`${id} is matched by  deafult`)
    
    next()

 }
 const createStuddent=(req,res)=>{
    res.send('create new  data')
 }
 const updateStudent=(req,res)=>{
    res.send('udate the  student data')
 }

 const deleteStudent=(req,res)=>{
    res.send(' delet  data')
 }
 export {allStudent,createStuddent,updateStudent,deleteStudent};