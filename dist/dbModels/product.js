"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
class Product extends objection_1.Model {
}
exports.default = Product;
Product.tableName = "Products";
Product.jsonSchema = {
    type: "object",
    required: ["name", "categoery", "price"],
    properties: {
        id: { type: "integer" },
        name: { type: "string" },
        categoery: { type: "string" },
        price: { type: "integer" }
    },
};
