const express = require('express');

const router = express.Router();

const usersApi = require('../../controllers/api/usersApi');

router.get('/', usersApi.index);

module.exports = router;
