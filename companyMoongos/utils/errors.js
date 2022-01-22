const { Error } = require('mongoose');
const { MongoError } = require('mongodb');

function errorhandler(res, err) {
  
  if(err instanceof Error.ValidationError) {
    validationErrorLogger(err);
    return res.status(406).send({ success: false, message: 'Not Acceptable Values.' });
  }

  if(err instanceof MongoError) {
    mongoErrorLogger(err);
    return res.status(406).send({ success: false, message: 'Not Acceptable Values.' });
  }

  return res.status(500).send({ success: false, message: err.message });
}

function validationErrorLogger(err) {
  for(const e in err.errors) {
    console.log( e, err.errors[e].message);
  }
  return;
}

module.exports = {
    errorhandler
}