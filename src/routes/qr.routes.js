const express = require("express");
const { getQR } = require("../controllers/qr.controller");

const router = express.Router();

router.post("/qr", require("../controllers/qr.controller").createQR);
router.get("/qr/:code", getQR);
router.put("/qr/:code", require("../controllers/qr.controller").updateQR);

// RUTA PARA OBTENER TODOS LOS QR
router.get("/qr", require("../controllers/qr.controller").getAllQRs); 

// NUEVA RUTA para redirigir
router.get("/redirect/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const QR = require("../models/qr.model");
    const qr = await QR.findOne({ where: { code } });

    if (!qr) {
      return res.status(404).json({ message: "QR no encontrado" });
    }

    res.redirect(qr.url);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/redirect/:code", async (req, res) => {
    try {
      const { code } = req.params;
      console.log(`Redirigiendo QR con código: ${code}`); // 👀 Log de prueba
  
      const QR = require("../models/qr.model");
      const qr = await QR.findOne({ where: { code } });
  
      if (!qr) {
        console.log("QR no encontrado");
        return res.status(404).json({ message: "QR no encontrado" });
      }
  
      console.log(`Redirigiendo a: ${qr.url}`); // 👀 Log de prueba
      res.redirect(qr.url);
    } catch (error) {
      console.error("Error en redirección:", error.message);
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
