const express = require('express');
const router = express.Router();

// we better have a users api for posts and get requests
router.use('/users', require('./users'));

module.exports = router;