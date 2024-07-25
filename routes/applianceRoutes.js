const express = require('express');
const router = express.Router();
const applianceController = require('../controllers/applianceController');

router.get('/', applianceController.getAllAppliances);
router.get('/:id', applianceController.getApplianceById);
router.get('/codigo/:codigo', applianceController.getApplianceByCodigo);
router.get('/precio/menor-a-900', applianceController.getAppliancesByPrice);

module.exports = router;
