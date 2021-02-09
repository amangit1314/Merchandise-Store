import mongoose from 'mongoose';
 
var userSchema = new mangose.Schema({

})
  var userSchema = new mangoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
      lastname: {
          type: String,
          maxlength: 16,
          trim: true
      },
      email: {
        type: String,
        maxlength: 16,
        trim: true,
        required: true,
        unique: true
      },
      userinfo: {
        type: String,
        trim: true,
      },
      //TODI: come back here
      password: {
        type: String,
        trim: true,
        required: true,
        unique: true
      },
      salt: String,
      role: {
          type: Number,
          default: 0
      },
      purchases: {
          type: Array,
          default: []
      }

  });

  module.exports = mangoose.model("user", userSchema)
