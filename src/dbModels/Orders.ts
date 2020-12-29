import { Model, Modifiers } from 'objection'

export default class Order extends Model {
    id!: number
    customerID!: number
    productID!: number
    quantity!: number
    weight!: number
    static tableName = 'Orders'
    static jsonSchema = {
        type: 'object',
        required: ['customerID', 'productID', 'quantity', 'weight'],
        properties: {
            id: { type: 'integer' },
            customerID: { type: 'integer' },
            productID: { type: 'integer' },
            quantity: { type: 'integer' },
            weight: { type: 'integer' },
        },
    }
}