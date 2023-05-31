
import { instance } from ".";
 export const fildAllProducts = async()=>{
   let res = await instance.get("products")
    return res
 };