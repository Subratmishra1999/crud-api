const express=require('express')
const router=express.Router()
var handler=require('../main/main')

router.get('/task/active',handler.getActiveTasks)
router.get('/task/completed',handler.getCompletedTasks)
router.get('/task',handler.getTaskList)
router.post('/task',handler.insertTask)
router.delete('/task/:id',handler.deleteOneTask)
router.delete('/task',handler.deleteAllTask)
router.put('/task/:id',handler.updateTask)
module.exports=router;