"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const knex_1 = __importDefault(require("knex"));
const api_doc_1 = __importDefault(require("./api-doc"));
const objection_1 = require("objection");
const Orders_1 = __importDefault(require("./dbModels/Orders"));
const product_1 = __importDefault(require("./dbModels/product"));
const customer_1 = __importDefault(require("./dbModels/customer"));
const app = express_1.default();
app.use(express_1.json());
app.use(express_1.urlencoded({ extended: false }));
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.listen(3000, () => { console.log("Server is running in port 3000"); });
app.get("/", (req, res) => { res.status(200).json(api_doc_1.default); });
// db Connection
const knex = knex_1.default({
    client: 'pg',
    useNullAsDefault: true,
    connection: 'postgres://postgres:123456@localhost:5434/testdb'
});
objection_1.Model.knex(knex);
// *************************  Orders   *****************
app.post("/createOrder", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Orders_1.default.query().insert(req.body).then((result) => {
        res.status(200).json({ status: true, data: result, Msg: "Order Created Successfully" });
    }).catch((Err) => {
        res.status(400).json({ status: false, data: Err, Msg: "Failed to create Order" });
    });
}));
app.get("/getAllOrders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_1.default.query();
        res.status(200).json({ status: true, data: data, Msg: "All Orders Fetched Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Fetch Orders " });
    }
}));
app.delete("/deletOrder/:ID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_1.default.query().deleteById(req.params.ID);
        res.status(200).json({ status: true, data: data, Msg: "Order Deleted Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Delete Order Orders " });
    }
}));
app.patch("/updateOrder", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Orders_1.default.query().findById(req.body.id).patch(req.body);
        res.status(200).json({ status: true, data: data, Msg: "Order Updated Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To update Order Orders" });
    }
}));
// ********************* Products ************************************************
app.post("/addproduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    product_1.default.query().insert(req.body).then((result) => {
        res.status(200).json({ status: true, data: result, Msg: "Product Added Successfully" });
    }).catch((Err) => {
        res.status(400).json({ status: false, data: Err, Msg: "Failed to add prodict" });
    });
}));
app.get("/getAllproducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_1.default.query();
        res.status(200).json({ status: true, data: data, Msg: "All Product Fetched Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Fetch Products " });
    }
}));
app.delete("/deletproduct/:ID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_1.default.query().deleteById(req.params.ID);
        res.status(200).json({ status: true, data: data, Msg: "Product Deleted Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Delete Product" });
    }
}));
app.patch("/updateproduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_1.default.query().findById(req.body.id).patch(req.body);
        res.status(200).json({ status: true, data: data, Msg: "Product Updated Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To update Product" });
    }
}));
// ********************* Customers ************************************************
app.post("/addCustomer", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    customer_1.default.query().insert(req.body).then((result) => {
        res.status(200).json({ status: true, data: result, Msg: "Customer Added Successfully" });
    }).catch((Err) => {
        res.status(400).json({ status: false, data: Err, Msg: "Failed to add Customer" });
    });
}));
app.get("/getAllCustomers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_1.default.query();
        res.status(200).json({ status: true, data: data, Msg: "All Customers Fetched Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Fetch Customers" });
    }
}));
app.delete("/deletCustomer/:ID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_1.default.query().deleteById(req.params.ID);
        res.status(200).json({ status: true, data: data, Msg: "Customer Deleted Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To Delete Customer" });
    }
}));
app.patch("/updateCustomer", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_1.default.query().findById(req.body.id).patch(req.body);
        res.status(200).json({ status: true, data: data, Msg: "Customer Updated Successfully" });
    }
    catch (err) {
        res.status(400).json({ status: true, data: err, Msg: "Failed To update Customer" });
    }
}));
const dbinit = () => __awaiter(void 0, void 0, void 0, function* () {
    if (yield !knex.schema.hasTable('Orders')) {
        yield knex.schema.createTable('Orders', table => {
            table.increments('id').primary();
            table.integer('customerID');
            table.integer('productID');
            table.integer('quantity');
            table.integer('weight');
        });
    }
    if (yield !knex.schema.hasTable('Customers')) {
        yield knex.schema.createTable('Customers', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('eamil');
            table.string('mobile');
        });
    }
    if (yield !knex.schema.hasTable('Products')) {
        yield knex.schema.createTable('Products', table => {
            table.increments('id').primary();
            table.string('name');
            table.string('categoery');
            table.integer('price');
        });
    }
});
dbinit();
