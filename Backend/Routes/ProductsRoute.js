const express = require('express');
const productsRoute = express.Router();
const ProductsModel = require('../Models/ProductsModel');

productsRoute.get("/", async(req,res)=>{
    const find = req.query.find;
    const {limit=20, page=1} = req.query;
    // res.send("Welcome to the products page")
    try{
        if(find){
            let products = await ProductsModel.find({
                title: {$regex: find, $options: "i"}
            })
            res.send(products)
        }else{
            let products = await ProductsModel.find().limit(limit).skip(limit*(page-1));
            res.send(products);
        }
    }catch(err){
        res.send(err.message);
    }
})

module.exports = productsRoute
