import express, { json, urlencoded } from "express";
import bodyParser from 'body-parser';
import Knex from "knex";
import apiDoc from "./api-doc";
import { Model } from "objection";
import Order from "./dbModels/Orders";
import Product from "./dbModels/product";
import Customer from "./dbModels/customer";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

app.listen(3000, () => { console.log("Server is running in port 3000") });
app.get("/", (req, res) => { res.status(200).json(apiDoc) });

// db Connection
const knex = Knex({
    client: 'pg',
    useNullAsDefault: true,
    connection: 'postgres://postgres:123456@localhost:5434/testdb'
});
Model.knex(knex);






// *************************  Orders   *****************
app.post("/createOrder", async (req, res) => {
    Order.query().insert(req.body).then((result: any) => {
        res.status(200).json({ status: true, data: result, Msg: "Order Created Successfully" });
    }).catch((Err: any) => {
        res.status(400).json({ status: false, data: Err, Msg: "Failed to create Order" });
    });
});
app.get("/getAllOrders", async (req, res) => {
    try {
        const data = await Order.query();
        res.status(200).json({ status: true, data: data, Msg: "All Orders Fetched Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Fetch Orders " });
    }
});
app.delete("/deletOrder/:ID", async (req, res) => {
    try {
        const data = await Order.query().deleteById(req.params.ID);
        res.status(200).json({ status: true, data: data, Msg: "Order Deleted Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Delete Order Orders " });
    }
});
app.patch("/updateOrder", async (req, res) => {
    try {
        const data = await Order.query().findById(req.body.id).patch(req.body);
        res.status(200).json({ status: true, data: data, Msg: "Order Updated Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To update Order Orders" });
    }
});






// ********************* Products ************************************************
app.post("/addproduct", async (req, res) => {
    Product.query().insert(req.body).then((result: any) => {
        res.status(200).json({ status: true, data: result, Msg: "Product Added Successfully" });
    }).catch((Err: any) => {
        res.status(400).json({ status: false, data: Err, Msg: "Failed to add prodict" });
    });
});
app.get("/getAllproducts", async (req, res) => {
    try {
        const data = await Product.query();
        res.status(200).json({ status: true, data: data, Msg: "All Product Fetched Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Fetch Products " });
    }
});
app.delete("/deletproduct/:ID", async (req, res) => {
    try {
        const data = await Product.query().deleteById(req.params.ID);
        res.status(200).json({ status: true, data: data, Msg: "Product Deleted Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Delete Product" });
    }
});
app.patch("/updateproduct", async (req, res) => {
    try {
        const data = await Product.query().findById(req.body.id).patch(req.body);
        res.status(200).json({ status: true, data: data, Msg: "Product Updated Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To update Product" });
    }
});





// ********************* Customers ************************************************
app.post("/addCustomer", async (req, res) => {
    Customer.query().insert(req.body).then((result: any) => {
        res.status(200).json({ status: true, data: result, Msg: "Customer Added Successfully" });
    }).catch((Err: any) => {
        res.status(400).json({ status: false, data: Err, Msg: "Failed to add Customer" });
    });
});
app.get("/getAllCustomers", async (req, res) => {
    try {
        const data = await Customer.query();
        res.status(200).json({ status: true, data: data, Msg: "All Customers Fetched Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Fetch Customers" });
    }
});
app.delete("/deletCustomer/:ID", async (req, res) => {
    try {
        const data = await Customer.query().deleteById(req.params.ID);
        res.status(200).json({ status: true, data: data, Msg: "Customer Deleted Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Delete Customer" });
    }
});
app.patch("/updateCustomer", async (req, res) => {
    try {
        const data = await Customer.query().findById(req.body.id).patch(req.body);
        res.status(200).json({ status: true, data: data, Msg: "Customer Updated Successfully" });
    } catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To update Customer" });
    }
});



const dbinit = async () => {
    if (await !knex.schema.hasTable('Orders')) {
        await knex.schema.createTable('Orders', table => {
            table.increments('id').primary();
            table.integer('customerID');
            table.integer('productID');
            table.integer('quantity');
            table.integer('weight');
        });
    }
    if (await !knex.schema.hasTable('Customers')) {
        await knex.schema.createTable('Customers', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('eamil');
            table.string('mobile');
        });
    }
    if (await !knex.schema.hasTable('Products')) {
        await knex.schema.createTable('Products', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('categoery');
            table.integer('price');
        });
    }
}
dbinit();