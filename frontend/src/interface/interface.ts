export interface ICategory {
    name:string
}


export interface IProduct {
    name?:string
    price:number
    _id?:string
    category:{
        name:string
    }
    quantity_in_stock?:number
}