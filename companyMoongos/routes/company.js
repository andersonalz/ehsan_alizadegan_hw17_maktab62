var express = require('express');
var router = express.Router();
const Company = require('../models/company')
const error = require('../utils/errors')


router.get('/', async function (req, res, next) {
  try {
    const companies = await Company.find({});
    return res.send({ title: 'Companies', companies });
  } catch(err) {
    return error.errorhandler(res, err);
  }
});

router.post('/create',async function create(req, res, next) {
  
  if(!req.body.name || !req.body.city || !req.body.province || !req.body.registerCode || !req.body.registerDate || !req.body.phone) {
    return error.errorhandler(res, { status: 406, message: 'Not acceptable fields.' });
  }

  try {
    const COMPANY = new Company({
      name: req.body.name,
      city: req.body.city,
      province: req.body.province,
      registerCode: req.body.registerCode,
      registerDate: req.body.registerDate,
      phone: req.body.phone
    });

    await COMPANY.save();

    return res.send({ success: true, message: 'company created successfully.', data: COMPANY });
  } catch(err) {
    return error.errorhandler(res, err);
  }
})

router.put('/:id', async function update(req, res) {
  try {
    const updated = await Company.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      city: req.body.city,
      province: req.body.province,
      registerCode: req.body.registerCode,
      registerDate: req.body.registerDate,
      phone: req.body.phone
    },{
      new: true
    });

    return res.send({ success: true, message: 'company updated successfully.', data: updated });
  } catch(err) {
    return error.errorhandler(res, err);
  }
});

router.delete('/:id', async function remove(req, res) {
  try {
    const deleted = await Company.findByIdAndDelete(req.params.id);
    return res.send({ success: true, message: 'company deleted successfully.'});
  } catch(err) {
    return error.errorhandler(res, err);
  }
});
module.exports = router;
