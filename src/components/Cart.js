import { useSelector } from 'react-redux';
import CartItem from './CartItem'

export default function Cart() {
  let cart = useSelector(state=>state.cart)
let total = cart.reduce((tol,cartItem)=>tol+cartItem.price*cartItem.quantity,0);
  return (
    <div>
      <h4>Cart</h4>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>STT</td>
            <td>Name</td>
            <td>IMAGE</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>TotalAmount</td>
            <td colSpan={2}>Action</td>
          </tr>
          {cart.map((cartItem,index)=> <CartItem key={cartItem.id} stt={index+1} cartItem={cartItem}/>)}
          <tr>
            <td colSpan={8}>
              Total : {total}
            </td>
          </tr>
       
        </tbody>
      </table>
    </div>
  );
}
