var mongoose = require("mongoose");
var taskName=new mongoose.Schema({
        _id:Number,
        value:String,
        isDone:Boolean
});
module.exports=mongoose.model("task",taskName)