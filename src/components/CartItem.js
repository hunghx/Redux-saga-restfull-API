import { useDispatch } from "react-redux";
import { delete_cart, update_cart } from "../redux/actions/action_cart";
import { useEffect, useState } from "react";

export default function CartItem({cartItem,stt}) {
  const [quantity, setQuantity]= useState(1);

  const dispatch= useDispatch()
  useEffect(()=>{
    setQuantity(cartItem.quantity)
  },[cartItem])
  return (
    <tr>
      <td>{stt}</td>
      <td>{cartItem.name}</td>
      <td>
        <img width={100} src={cartItem.image_url} alt={cartItem.name} />
      </td>
      <td>
        <input
          type={"number"}
         value={quantity}
         onChange={(e)=>setQuantity(+e.target.value)}
        // onChange={(e)=>dispatch(update_cart({...cartItem, quantity:+e.target.value}))}
        />
      </td>
      <td>{cartItem.price}$</td>
      <td>{cartItem.price*quantity}$</td>
      <td>
        <button className="btn btn-warning" 
        onClick={()=>dispatch(update_cart({...cartItem, quantity:quantity}))}
        >
          Update
        </button>
      </td>
      <td>
        <button className="btn btn-danger"
        onClick={()=>dispatch(delete_cart(cartItem.id))}>
          Delete
        </button>
      </td>
    </tr>
  );
}
