const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../connection')
const validate = require('validator');



const employ = connection.define(
    'employ', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "firstName is required"
            }
        },
        len: {
            args: [5, 20],
            msg: "firstname is more than 5 characters and less than 20 characters"
        }
    },
    lastName: {
        type: DataTypes.STRING,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "firstName is required"
            }
        },
        len: {
            args: [5, 20],
            msg: "lastname is more than 5 characters and less than 20 characters"
        }
    },
    nationalId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "username is required"
            }
        },
        max: 10,
        min: 10,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "gender is required"
            },
            is: ["male", "female"],

        }
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // notEmpty: true,
            notEmpty: {
                args: [true],
                msg: "position is required"
            },
            is: ["employ", "manager"]
        }
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "birthday is required"
            }
        }
    }
},
    {
        tableName: 'employ',
         //createAt , updateAt filed
    }
);



module.exports = employ

