"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
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
