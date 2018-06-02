const express = require('express');
const router = express.Router();

var customers = require('../controller/customers');

router.get('/details', (req, res, next) => {
    customers.getCustomerDetails(req, res);
});

module.exports = router;