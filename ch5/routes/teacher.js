 // router module for  teacher

import express from 'express'
 const router =express.Router();
 router.get('/all',(req,res)=>{
    res.send('all teacher')
 })
 router.post('/create',(req,res)=>{
    res.send('create new  data')
 })
 router.put('/update',(req,res)=>{
    res.send('udate the  teacher data')
 })
 router.delete('/delete',(req,res)=>{
    res.send(' delete data')
 })
 export default router;