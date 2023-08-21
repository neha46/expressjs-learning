//  router module for  student

import express from 'express'
 const router =express.Router();
 router.get('/all',(req,res)=>{
    res.send('all student')
 })
 router.post('/create',(req,res)=>{
    res.send('create new  data')
 })
 router.put('/update',(req,res)=>{
    res.send('udate the  student data')
 })
 router.delete('/delete',(req,res)=>{
    res.send(' delet  data')
 })
 export default router;