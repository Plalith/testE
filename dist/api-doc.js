"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "Orders": {
        "APIs": [
            {
                "method": "POST",
                "Path": "/createOrder",
                "description": "To Create Order",
                "sampleBody": {
                    "customerID": 1,
                    "productID": 1,
                    "quantity": 1,
                    "weight": 1
                }
            },
            {
                "method": "GET",
                "Path": "/getAllOrders",
                "description": "TO Fetch All Orders"
            },
            {
                "method": "DELETE",
                "Path": "/deletOrder/{ID}",
                "description": "TO Delete Order with ID in Parmas"
            },
            {
                "method": "PATCH",
                "Path": "/updateOrder",
                "description": "To Update Order",
                "sampleBody": {
                    "customerID": 1,
                    "productID": 1,
                    "quantity": 1,
                    "weight": 1,
                    "ID": 1
                }
            }
        ]
    },
    "Products": {
        "APIs": [
            {
                "method": "POST",
                "Path": "/addproduct",
                "description": "To Create Product",
                "sampleBody": {
                    "name": "ice creams",
                    "categoery": "Food",
                    "price": 5
                }
            },
            {
                "method": "GET",
                "Path": "/getAllproducts",
                "description": "TO Fetch All products"
            },
            {
                "method": "DELETE",
                "Path": "/deletproduct/{ID}",
                "description": "TO Delete Product with ID in Parmas"
            },
            {
                "method": "PATCH",
                "Path": "/updateproduct",
                "description": "To Update product",
                "sampleBody": {
                    "name": "Test Updated",
                    "categoery": "Food",
                    "price": 5,
                    "id": 2
                }
            }
        ]
    },
    "Customers": {
        "APIs": [
            {
                "method": "POST",
                "Path": "/addCustomer",
                "description": "To Create Customer",
                "sampleBody": {
                    "name": "Suvartha Kiumar",
                    "eamil": "Suvartha@hotmail.com",
                    "mobile": "9856589856"
                }
            },
            {
                "method": "GET",
                "Path": "/getAllCustomers",
                "description": "TO Fetch All Customers"
            },
            {
                "method": "DELETE",
                "Path": "/deletCustomer/{ID}",
                "description": "TO Delete Customer with ID in Parmas"
            },
            {
                "method": "PATCH",
                "Path": "/updateCustomer/{ID}",
                "description": "To Update Customer",
                "sampleBody": {
                    "name": "Suvartha Kiumar",
                    "eamil": "Suvartha@hotmail.com",
                    "mobile": "9856589856",
                    "id": 3
                }
            }
        ]
    }
};
