"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const customer_1 = __importDefault(require("./customer"));
class Order extends objection_1.Model {
}
exports.default = Order;
Order.tableName = 'Orders';
Order.jsonSchema = {
    type: 'object',
    required: ['customerID', 'productID', 'quantity', 'weight'],
    properties: {
        id: { type: 'integer' },
        customerID: { type: 'integer' },
        productID: { type: 'integer' },
        quantity: { type: 'integer' },
        weight: { type: 'integer' },
    },
};
Order.relationMappings = {
    owner: {
        relation: objection_1.Model.BelongsToOneRelation,
        modelClass: customer_1.default,
        join: {
            from: 'Orders.customerID',
            to: 'Customers.id'
        }
    }
};
