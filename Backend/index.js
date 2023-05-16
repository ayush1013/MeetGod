const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const {connection} = require("./Config/config.js");
const productsRoute = require("./Routes/ProductsRoute.js");
const adminRoute = require("./Routes/AdminRoute.js")

app.use(cors());
app.use(express.json());

app.use("/products", productsRoute);

app.use("/admin", adminRoute);

app.get("/", async (req, res) => {
    res.send("Welcom to Home Page")
})

app.listen(process.env.port, async ()=>{
    try {
        await connection
        console.log("Successfully connected to the Database");
    } catch (err) {
      console.log("Error while connecting to the Database");
      console.log(err);
    }
    console.log(`This server is running at port ${process.env.port}`);
})

