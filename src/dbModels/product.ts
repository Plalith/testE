import { Model, Modifiers } from "objection"

export default class Product extends Model {
    id!: number
    name!: string
    categoery!: string
    price!: number
    static tableName = "Products"
    static jsonSchema = {
        type: "object",
        required: ["name", "categoery", "price"],
        properties: {
            id: { type: "integer" },
            name: { type: "string" },
            categoery: { type: "string" },
            price: { type: "integer" }
        },
    }
}





