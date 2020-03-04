var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var task= Schema({
        id:Number,
        name:String,
        isDone:Boolean,
});
module.exports = mongoose.model("task", task);
