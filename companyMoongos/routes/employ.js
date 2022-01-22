var express = require('express');
var router = express.Router();
const Company = require('../models/company')
const Employee = require('../models/employ');
const error = require('../utils/errors')


router.get('/Company', async function (req, res) {
  Company.find({}, (err, companies) => {
    if (err) return res.status(500).send({ success: false, message: 'Internal server error.' });

    if (!companies.length) {
      return res.send({ success: true, message: 'there is no company' });
    }
    return res.send({ success: true, message: 'list of companies', data: companies });
  });
}

)
router.get('/', async function (req, res) {
  Employee.find({}).populate('company').exec((err, companies) => {
    if (err) return res.status(500).send({ success: false, message: 'Internal server error.' });

    if (!companies.length) {
      return res.send({ success: true, message: 'there is no company' });
    }
    return res.send({ success: true, message: `find success`, data: companies });
  });
}
);

router.get('/:company', async function (req, res) {
  Employee.find({ employ: req.params.company }, (err, companies) => {
    if (err) return res.status(500).send({ success: false, message: 'Internal server error.' });

    if (!companies.length) {
      return res.send({ success: true, message: 'there is no company' });
    }
    return res.send({ success: true, message: `find ${company} success`, data: companies });
  });
}
);

router.get('/:company', async function (req, res) {
  Employee.find({ employ: req.params.company }, (err, companies) => {
    if (err) return res.status(500).send({ success: false, message: 'Internal server error.' });

    if (!companies.length) {
      return res.send({ success: true, message: 'there is no company' });
    }
    return res.send({ success: true, message: `find ${company} success`, data: companies });
  });
}
);

router.post('/create', async function (req, res) {
  if (!req.body.name || !req.body.lastname || !req.body.nationalCode || !req.body.birthday || !req.body.company) {
    return error.errorhandler(res, { status: 406, message: 'Not acceptable fields.' });
  }

  try {
    const company = await Company.findById(req.body.company);
    if (!company) return error.errorhandler(rew, { message: `there is no company with id: ${req.body.company}` }, 'controller/employee/create');

    const employee = new Employee({
      name: req.body.name,
      lastname: req.body.lastname,
      nationalCode: req.body.nationalCode,
      gender: req.body.gender,
      isManager: req.body.isManager,
      birthday: req.body.birthday,
      company: company.id
    });

    await employee.save();
    return res.send({ success: true, messsage: 'employee created successfully.', data: employee });

  } catch (err) {
    console.log(err);
    return error.errorhandler(res, err, 'controller/employee/create');
  }
})

////////////////////////////////////////////////////////////////
router.put('/EM/:id', async function update(req, res) {
  try {
    const company = await Company.findById(req.body.company);
    if (!company) return error.errorhandler(rew, { message: `there is no company with id: ${req.body.company}` }, 'controller/employee/create');

    const updated = await Employee.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      lastname: req.body.lastname,
      nationalCode: req.body.nationalCode,
      gender: req.body.gender,
      isManager: req.body.isManager,
      birthday: req.body.birthday,
      company: company.id
    },{
      new: true
    });

    return res.send({ success: true, message: 'employ  updated successfully.', data: updated });
  } catch(err) {
    console.log(err);
    return error.errorhandler(res, err);
  }
});

router.delete('/:id', async function remove(req, res) {
  try {
    const deleted = await Employee.findByIdAndDelete(req.params.id);
    return res.send({ success: true, message: 'company deleted successfully.'});
  } catch(err) {
    return error.errorhandler(res, err);
  }
});

/////////////////////////////////////////////////////////////////////////////////
router.put('/:id', function (req, res) {
  Company.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    city: req.body.city,
    province: req.body.province,
    phone: req.body.phone
  }, {
    new: true
  }, (err, updated) => {
    if (err) return res.status(500).send({ success: false, message: 'Internal server error.' });

    return res.send({ success: true, message: 'company updated successfully.', data: updated });
  });
});

router.delete('/:id', function (req, res) {
  Company.findByIdAndDelete(req.params.id, (err, deleted) => {
    if (err) return res.status(500).send({ success: false, message: 'Internal server error.' });

    return res.send({ success: true, message: 'company deleted successfully.', data: deleted });
  });
});

module.exports = router;

