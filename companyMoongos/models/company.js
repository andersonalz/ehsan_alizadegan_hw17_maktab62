const { Schema, model } = require('mongoose');

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  registerCode: {
    type: Number,
    required: true,
    unique: true
  },
  registerDate: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = model('Company', companySchema);