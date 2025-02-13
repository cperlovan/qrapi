const sequelize = require('../config/db.js');
const QR = require('./qr.model');

const syncDB = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("✅ Base de datos sincronizada");
  } catch (error) {
    console.error("❌ Error al sincronizar BD:", error);
  }
};

module.exports = { sequelize, syncDB, QR };
