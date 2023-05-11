const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    image_gallery: {type: Array},
    price: {type: Number, required: true},
    descount: {type: Number},
    brand: {type: String},
    category: {type: String},
    outOfStock: {type: Boolean},
    color: { type: String },
    size: {type: String},
    height: {type: String},
    width: {type: String},
    legth: {type: String},
})

const ProductsModel = mongoose.model("Products", ProductsSchema);

module.exports = ProductsModel;