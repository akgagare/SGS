const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const adminLogin = require('./controller/adminController');

router.post('/login',adminLogin);

module.exports = router;
