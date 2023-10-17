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

const categoryService = {
    apiGetCategory
}


export default categoryService