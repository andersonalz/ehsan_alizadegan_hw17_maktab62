const { Schema, model } = require('mongoose');



const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  lastname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 150
  },
  nationalCode: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 10
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    default: 'male'
  },
  isManager: {
    type: Boolean,
    default: false
  },
  birthday: {
    type: Date,
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  }
});

module.exports = model('Employee', employeeSchema);