const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/', userController.create);
router.get('/', userController.findAll);

module.exports = router;
