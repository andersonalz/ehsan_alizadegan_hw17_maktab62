const error = require('../utils/errors');

function checkInputs(req, res, next) {
  if(!req.body.name || !req.body.city || !req.body.province || !req.body.registerCode || !req.body.registerDate || !req.body.phone) {
    return error.handler(res, { status: 406, message: 'Not acceptable fields.' });
  }
  next()
}

module.exports = {
  checkInputs
}