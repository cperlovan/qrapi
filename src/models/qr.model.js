const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const QR = sequelize.define("QR", {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = QR;
