let mongoose = require('mongoose');
let studentSchema = new mongoose.Schema({
    id:Number,
    name:{type:String},
    currentClass:Number,
    division:String

})
let Student = mongoose.model('students',studentSchema);
module.exports = Student