import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { delete_cart, update_cart } from "../redux/actions/action_cart";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let { cart, index } = props;
  const handleDelete = () => {
    dispatch(delete_cart(cart.id));
  };
  useEffect(() => {
    setQuantity(cart.quantity);
  }, [props]);

  const handleUpdate = () => {
    dispatch(update_cart({ ...cart, quantity }));
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{cart.name}</td>
      <td>
        <img width={100} src={cart.image_url} alt={cart.name} />
      </td>
      <td>
        <input
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          type={"number"}
        />
      </td>
      <td>{cart.price}</td>
      <td>{cart.price * quantity}</td>
      <td>
        <button className="btn btn-warning" onClick={handleUpdate}>
          Update
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
