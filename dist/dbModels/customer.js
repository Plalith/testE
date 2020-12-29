"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Customer extends objection_1.Model {
}
exports.default = Customer;
Customer.tableName = 'Customers';
Customer.jsonSchema = {
    type: 'object',
    required: ['name', 'eamil', 'mobile'],
    properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        eamil: { type: 'string' },
        mobile: { type: 'string' },
    },
};
