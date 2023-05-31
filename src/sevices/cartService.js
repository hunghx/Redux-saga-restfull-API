import { instance } from ".";

export const getCart = async()=>{
    let res = await instance.get("cart")
    return res
}
export const findCartById= async(id)=>{
    // console.log(`cart?product_id=${id}`);
    let res = await instance.get(`cart?product_id=${id}`)
    // console.log(res);
    return res
}

export const addCart = async(cartItem)=>{
    let res = await instance.post("cart",cartItem)
    return res
}
export const deleteCartItem = async(idDel)=>{
    let res = await instance.delete(`cart/${idDel}`)
    return res
}
export const updateCartItem = async(cartItem)=>{
    let res = await instance.patch(`cart/${cartItem.id}`,cartItem)
        return res  
}
