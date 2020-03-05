var mongoose=require('mongoose')
var task=require('../model')

module.exports.insertTask=(req,res)=>{
        var t=new task();
        t.name=req.body.value;
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