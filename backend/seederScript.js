require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const importData = async () => {

    console.log("Data import Success1");
    try{
        console.log("Data import Success2");
        // await Product.deleteMany({});
        await Product.insertMany(productsData);

        console.log("Data import Success");

        process.exit();
    }catch(error){
        console.error("Error with Data import");
        process.exit(1);
    }
};

importData();

