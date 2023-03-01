import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_cart } from "../redux/actions/action_cart";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();

  const listCarts = useSelector((state) => state.carts);
  console.log(listCarts);
  useEffect(() => {
    dispatch(get_all_cart());
  }, []);
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
          {listCarts.map((cart, index) => (
            <CartItem key={cart.id} index={index} cart={cart} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
