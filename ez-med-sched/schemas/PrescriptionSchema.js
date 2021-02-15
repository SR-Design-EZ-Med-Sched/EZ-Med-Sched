mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  title : String,
  description : String,
  frequency : String,
  quantity : Number,
  medium : String,
  medicineType : String,
  StartDate : Date,
  EndDate : Date,
  userLevel : {type: Number, default : 2},
  name : String
});
  
module.exports = mongoose.model('Prescription', PrescriptionSchema);