'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mesa.init({
    numero: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL(10, 2),
    liberado: DataTypes.BOOLEAN
    
  }, {
    sequelize,
    modelName: 'Mesa',
  });
  return Mesa;
};