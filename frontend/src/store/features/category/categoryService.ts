import axios from 'axios'
import axiosConfig from '../../../utils/axiosConfig'

const apiGetCategory = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: 'api/v1/category/get-all-category',
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

const apiCreateCategory = (data:{name:string}) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/api/v1/category/create-category',
            data
        })
        resolve(response.data)
    } catch (error) {
        reject(error)
    }
})

const categoryService = {
    apiGetCategory,apiCreateCategory
}


export default categoryService