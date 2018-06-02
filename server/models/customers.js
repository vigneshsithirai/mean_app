var mongoose = require( 'mongoose' );

var customerSchema = new mongoose.Schema({
    CustomerID: {
        type: String,
        unique: true,
        required: true
    },
    CompanyName: {
        type: String,
        required: true
    }, ContactName: {
        type: String,
        required: true
    }, City: {
        type: String,
        required: true
    }, Region: {
        type: String,
        required: true
    }, PostalCode: {
        type: String,
        required: true
    }, Country: {
        type: String,
        required: true
    }, Phone: {
        type: String,
        required: true
    }, Fax: {
        type: String,
        required: true
    }
});

var Customers = mongoose.model('Customers', customerSchema);
module.exports = Customers;
