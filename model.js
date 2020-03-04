var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var task=new Schema({
        id:Number,
        name:String,
        isDone:Boolean,
});