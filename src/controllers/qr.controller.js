const QR = require('../models/qr.model');

// Crear un QR con su URL
const createQR = async (req, res) => {
  try {
    const { code, url } = req.body;
    const qr = await QR.create({ code, url });
    res.status(201).json(qr);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener la URL de un QR
const getQR = async (req, res) => {
  try {
    const { code } = req.params;
    const qr = await QR.findOne({ where: { code } });
    if (!qr) return res.status(404).json({ message: "QR no encontrado" });
    res.json(qr);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar la URL de un QR
const updateQR = async (req, res) => {
  try {
    const { code } = req.params;
    const { url } = req.body;
    const qr = await QR.findOne({ where: { code } });
    if (!qr) return res.status(404).json({ message: "QR no encontrado" });

    qr.url = url;
    await qr.save();
    res.json(qr);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los QR
const getAllQRs = async (req, res) => {
  try {
    const qrs = await QR.findAll(); // Busca todos los registros en la base de datos
    res.json(qrs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createQR, getQR, updateQR, getAllQRs };



