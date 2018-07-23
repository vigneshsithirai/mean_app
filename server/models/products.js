var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    ProductID: {
        type: String,
        unique: true,
        required: true
    }, ProductName: {
        type: String,
        required: true
    }, CategoryID: {
        type: String,
        required: true
    }, UnitPrice: {
        type: Number,
        required: true
    }, UnitsInStock: {
        type: Number,
        required: true
    }
});

var Products = mongoose.model('Products', productSchema);
module.exports = Products;