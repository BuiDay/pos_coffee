import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import {persistReducer} from "redux-persist"
import { RootState } from '../redux'
import categoryReducer from "../features/category/categorySilce"
import productsReducer from "../features/products/productsSilce"
import orderReducer from "../features/order/orderSilce"
const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key:'auth',
    whitelist:['isLoggedIn','token']
}

const rootReducer = combineReducers({
    category:categoryReducer,
    products:productsReducer,
    orders:orderReducer
})

export default rootReducer
