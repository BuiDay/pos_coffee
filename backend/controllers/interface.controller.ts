export interface ICategory{
    name:string
}

export interface IProduct{
    name:string,
    price:number,
    category:string,
    quantity_in_stock:number
}

export interface IBill{
    date: Date,
    total_amount: number,
    month: string,
    items: [
        {
            product:string,
            quantity: number,
        }
    ],
}
