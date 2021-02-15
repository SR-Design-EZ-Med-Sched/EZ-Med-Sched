mongoose = require('mongoose');
bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username : {type:String, required: true, unique: true},
  //userLevel : {type: Number, required: true},
  email : {type: String, required: true, unique: true },
  phoneNumber : {type: String},
  password : {type : String},
  prescription : {type : mongoose.Schema.Types.String, ref: 'Prescription'},
  method : {type: String, enum: ['Email', 'Google', 'Facebook'], required: true},
  id :  {type: String}
});

// Generates a hash for the password
const hashPasswordSync = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// Compares password to stored hash
const comparePasswordSync = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = mongoose.model('User', UserSchema);
module.exports.hashPasswordSync = hashPasswordSync;
module.exports.comparePasswordSync = comparePasswordSync;