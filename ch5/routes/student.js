//  router module for  student

import express from 'express'
import {allStudent,createStuddent,updateStudent,deleteStudent} from '../contoller/studentController.js'
 const router =express.Router();//router instance
 router.get('/all/:id([0-9]{4})',allStudent)
 router.post('/create',createStuddent)
 router.put('/update',updateStudent)
 router.delete('/delete',deleteStudent)
 export default router;