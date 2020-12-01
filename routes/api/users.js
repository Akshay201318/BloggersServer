const express = require('express');

const router = express.Router();

const usersApi = require('../../controllers/api/usersApi');

router.post('/signup', usersApi.signUp);
router.post('/login', usersApi.login);

module.exports = router;
