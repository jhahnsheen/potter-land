const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        creditCard: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'user',
    }
);

module.exports = User;