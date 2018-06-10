const express = require('express');
const router = express.Router();

var customers = require('../controller/customers');

/**
 * All the custamers related API's are starts with /custamers/:relativepath
 */

router.get('/details', (req, res, next) => {
    customers.getCustomerDetails(req, res);
});

module.exports = router;