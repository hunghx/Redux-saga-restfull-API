import { call, put } from "redux-saga/effects"
import { addCart, findCartById, getCart ,deleteCartItem, updateCartItem} from "../sevices/cartService";

export const findCart= function*(){
    try{
      let res = yield call(getCart);
      console.log("caapj nhaaj tlaij cart");
        yield put({type:"GET_CART_SUCCESS",payload:res.data})
    }catch (e){
        console.log(e)
    }
}
export const postNewCart= function*(action){
    try {
        let pro = action.payload
        console.log(action.payload);
        let res = yield call(findCartById,pro.id);
        if(res.data.length>0){
            console.log("ĐÃ tồn tại");
            let cart = res.data;
            let cartItem = {...cart[0],quantity:cart[0].quantity+1}
            yield call(updateCartItem,cartItem)
            yield findCart();
        }else{
            console.log("CHƯA tồn tại");
            let res = yield call(getCart);
            let cart = res.data;
            let id = cart.length===0?1:cart[cart.length-1].id+1;
            let cartItem= {id,product_id:pro.id,name:pro.name,price:pro.price ,image_url:pro.image_url,quantity:1}
            let resPost =  yield call(addCart,cartItem);
            console.log(resPost);
            yield put({type:"ADD_TO_CART_SUCCESS",payload:resPost.data})
            // yield findCart();
        }

        
    } catch (error) {
        console.log(error);
    }

}
export const deleteCart= function*(action){
    try {
        yield call(deleteCartItem,action.payload)
        yield findCart();
    } catch (error) {
        console.log(error);
    }
}
export const updateCart= function*(action){
    try {
            yield call(updateCartItem,action.payload)
            yield findCart();
        } catch (error) {
            console.log(error);
        }
}