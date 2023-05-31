import {call, put} from "redux-saga/effects"
import { fildAllProducts } from "../sevices/productService";

export const findAllProducts= function*(){
    try{
        let res =yield call(fildAllProducts)
        // console.log(res);
        yield put({type:"GET_ALL_PRODUCT", payload:res.data})
    }catch(e){
        console.log(e);
    }
}