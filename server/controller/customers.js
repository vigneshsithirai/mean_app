var mongoose = require('mongoose');
var Customer = mongoose.model('Customers');


module.exports.getCustomerDetails = function (req, res) {
    var query = [
        {
            '$project':
                {
                    'CustomerID': 1,
                    'CompanyName': 1,
                    'Phone': 1
                }
        },
        { '$skip': 5 },
        { '$limit': 5 }
    ]
    Customer.aggregate(query, function (err, data) {
        res.status(200);
        res.json({
            "customers": data
        });
    })
};