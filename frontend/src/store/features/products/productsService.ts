import axios from 'axios'
import axiosConfig from '../../../utils/axiosConfig'
import { IProduct } from '../../../interface/interface'

const apiGetProducts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: 'api/v1/product/get-all-products',
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

const apiCreateProduct = (data:{name:string,price:number,category:string}) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/product/create-product',
            data
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})



const productsService = {
    apiGetProducts, apiCreateProduct
}


export default productsService