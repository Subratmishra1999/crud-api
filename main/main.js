var mongoose=require('mongoose')
var task=require('../model')

module.exports.insertTask=(req,res)=>{
 
        var t=new task();
        t.value=req.body.value;
        t._id=req.body._id;
        t.isDone=req.body.isDone;
        t.save()
        .then(item =>{
                return res.status(200).json({message:'task added'})
        })
        .catch(error => {
                return res.status(404).json({message:'Failed to add task'})
        })
}

module.exports.getTaskList=(req,res) => {
        task.find({}).sort({_id: 'desc'}).exec((err,docs)=>{
                if(err){
                        res.send("Error Occured"+err)
                }
                else{
                        res.json(docs);
                }
        })
}

module.exports.deleteOneTask=(req,res)=>{
        task.findByIdAndDelete({_id:req.params.id},(err)=>{
                if(err){
                        res.send("Error Occured"+err)
                }
                else{
                        res.send("Task Deleted Succesfully")
                }
        })
}

module.exports.deleteAllTask=(req,res)=>{
        task.remove({},(err)=>{
                if(err){
                        res.send("Error Occcured")
                }
                else{
                        res.send("All Tasks has been deleted Successfully")
                }
        })
}

module.exports.updateTask= async (req,res)=>{
        var a='true'
        await task.findOne({_id : req.params.id}).exec(async (err, docs)=>{
                if(err){
                        res.send("Task Doesn't Exist")
                }
                else{   
        
        const response = await task.updateOne({_id : req.params.id}, { isDone : docs.isDone ? false : true },
                (err,doc)=>{
                        
                        if(err){
                                res.send("Error Occured"+err);
                        }
                        else{   
                                res.status(200).json("Task Updated Succesfully")
                        }
                }
                );
                }
        })

}

module.exports.getActiveTasks=(req,res)=>{
        task.find({isDone: false}).sort({_id:'desc'}).exec((err,docs)=>{
                if(err){
                        res.send("Unable to fetch Data")
                }
                else{
                        res.status(200).json(docs)
                }
        })
}

module.exports.getCompletedTasks=(req,res)=>{
        task.find({isDone: true}).sort({_id:'desc'}).exec((err,docs)=>{
                if(err){
                        res.send("Unable to fetch Data")
                }
                else{
                        res.send(docs)
                }
        })
}