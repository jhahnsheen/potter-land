const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
	{
		name: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.FLOAT(10, 2),
		},
		inStock: {
			type: DataTypes.BOOLEAN,
		},
	},
	{
		sequelize,
		timestamps: true,
		underscored: true,
		freezeTableName: true,
		modelName: 'product',
	}
);

module.exports = Product;