// const { Sequelize, DataTypes, Model } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../connection')
const sequelize = new Sequelize('mysql::memory:');
const validate = require('validator')
const employ = require('./employ')


const company = connection.define('company',
 {
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "Name is required"
            },
            notNull: {
                msg: "Name is required"
            }
        },
        len: {
            args: [5, 20],
            msg: "name is more than 5 characters and less than 20 characters"
        }
    },
    registrationNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "registrationNumber is required"
            },
            notNull: {
                msg: "registrationNumber is required"
            }
        },
        len: {
            args: [6,6],
            msg: "registrationNumber is more than 5 characters and less than 20 characters"
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "city is required"
            },
            notNull: {
                msg: "city is required"
            }
        },
        len: {
            args: [3, 20],
            msg: "city name between 3 and 20 is required"
        }
    },
    province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "province is required"
            },
            notNull: {
                msg: "province is required"
            }
        },
        len: {
            args: [3, 20],
            msg: "city name between 3 and 20 is required"
        }
    },
    registerDate: {
            type: DataTypes.DATE,
            allowNull: true
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: [true],
                msg: "number is required"
            },
            notNull: {
                msg: "number is required"
            },
        },
        len: {
            args: [8,8],
            msg: "number name between 3 and 20 is required"
        }
    }

},
    {
        tableName: 'company',
         //createAt , updateAt filed
    }
);

company.hasMany(employ , {
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})
employ.belongsTo(company)

module.exports = company




// const company = connection.define('company',
//     {
//         registrationnumber: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 // notEmpty: true,
//                 notEmpty: {
//                     args: [true],
//                     msg: "firstName is required"
//                 },
//                 notNull: {
//                     msg: "lastName is required"
//                 }
//             },
//             len: {
//                 args: [5, 20],
//                 msg: "firstname is more than 5 characters and less than 20 characters"
//             }
//         },
//         lastName: {
//             type: DataTypes.STRING,
//             validate: {
//                 // notEmpty: true,
//                 notEmpty: {
//                     args: [true],
//                     msg: "firstName is required"
//                 },
//                 notNull: {
//                     msg: "lastName is required"
//                 }
//             },
//             len: {
//                 args: [5, 20],
//                 msg: "lastname is more than 5 characters and less than 20 characters"
//             }
//         },
//         nationalId: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 // notEmpty: true,
//                 notEmpty: {
//                     args: [true],
//                     msg: "username is required"
//                 },
//                 notNull: {
//                     msg: "username is required"
//                 }
//             },
//             len: {
//                 args: [10, 10],
//                 msg: "nationalId must equal to 10"
//             }
//         },
//         grnder: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 // notEmpty: true,
//                 notEmpty: {
//                     args: [true],
//                     msg: "gender is required"
//                 },
//                 notNull: {
//                     msg: "gender is required"
//                 }
//             }
//         },
//         position: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 // notEmpty: true,
//                 notEmpty: {
//                     args: [true],
//                     msg: "email is required"
//                 },
//                 notNull: {
//                     msg: "email is required"
//                 }
//             }
//         },
//         birthday: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 notNull: {
//                     msg: "birthday is required"
//                 }
//             }
//         }
//     });


