import { Model, Modifiers } from 'objection'

export default class Customer extends Model {
    id!: number
    name!: string
    eamil!: string
    mobile!: string
    static tableName = 'Customers'
    static jsonSchema = {
        type: 'object',
        required: ['name', 'eamil', 'mobile'],
        properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            eamil: { type: 'string' },
            mobile: { type: 'string' },
        },
    }
}