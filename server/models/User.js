const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  role:{
    type:String,
    enum:["Kitchen","Table"],
    default:"Table"
  },
  order: {
    type: Boolean,
    default: false
  },
  activeOrder: {type:Schema.Types.ObjectId, ref:"Order"}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
