const express = require('express');

const router = express.Router();

const mesa = require('../controllers/mesa');

router.get('/', mesa.getAll);

module.exports = router;