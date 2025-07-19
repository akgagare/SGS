const express = require('express');
const router = express.Router(); // ✅ use express.Router(), not 'express-router'
const Admin = require('../models/admin');
const adminLogin = require('./controller/')

router.post('/login',adminLogin);

module.exports = router;
