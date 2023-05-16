const express = require('express');
const adminRoute = express.Router();
const ProductsModel = require("../Models/ProductsModel");
// const UserModel = require("../Models/UserModel");
const AdminMiddleware = require("../Middlewares/AdminMiddleware");

// adminRoute.use(AdminMiddleware);

adminRoute.get("/", async (req, res) => {
    const {find, limit=20, page=1} = req.query;

    try {
        if(find){
            const products = await ProductsModel.find({
                model: {$regex: find, $options: "i"}
            }).limit(limit).skip((page-1)*limit).exec();
            const count = await ProductsModel.countDocuments();
            res.json({
                products,
                count,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        }else{
            const products = await ProductsModel.find().limit(limit).skip((page-1)*limit).exec();
            const count = await ProductsModel.countDocuments();
            res.json({
                products,
                count,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        }
    } catch (err) {
        console.error(err.message);
    }
});

adminRoute.post("/", async (req, res) => {
    const data = req.body;
    try {
        const product = new ProductsModel(data);
        await product.save();
        res.send("Product added successfully");
    } catch (err) {
        res.send("Product failed to be added");
        console.log(err);
    }
})

module.exports = adminRoute;
