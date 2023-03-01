import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_product_by_status } from "../redux/actions/actions_product";
import { post_new_cart } from "../redux/actions/action_cart";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listProducts = useSelector((state) => state.product_user);

  useEffect(() => {
    dispatch(get_product_by_status());
  }, []);

  const handleAddToCart = (pro) => {
    dispatch(post_new_cart({ ...pro, pro_id: pro.id, quantity: 1 }));
    navigate("/cart");
  };
  return (
    <div className="row p-3">
      {listProducts.map((pro) => (
        <div key={pro.id} className="col-3 col-md-3">
          <div className="card">
            <img src={pro.image_url} className="card-img-top" alt={pro.name} />
            <div className="card-body">
              <h5 className="card-title">{pro.name}</h5>
              <p className="card-text">{pro.description.slice(0, 30)}</p>
              <p>{pro.price} $</p>
              <button
                className="btn btn-danger"
                onClick={() => handleAddToCart(pro)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
