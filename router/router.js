const express=require('express')
const router=express.Router()
var handler=require('../main/main')
// router.get('/task',handler.getTaskList)
router.post('/task',handler.insertTask)
module.exports=router;