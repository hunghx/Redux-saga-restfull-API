import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  delete_product,
  get_all_product,
} from "../../redux/actions/actions_product";

export default function ListProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(get_all_product());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("bạn có chắc chắn muốn xoá không")) {
      dispatch(delete_product(id));
    }
  };
  const handleEdit = (pro) => {
    navigate("update-product", { state: pro });
  };
  return (
    <div>
      <h1>ListProduct</h1>
      <Link className="btn btn-info" to={"add-product"}>
        ADD PRODUCT
      </Link>

      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>STT</td>
            <td>NAME</td>
            <td>IMAGE</td>
            <td>PRICE</td>
            <td>STATUS</td>
            <td colSpan={2}>ACTION</td>
          </tr>
          {listProducts.map((pro) => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>
                <img width={100} src={pro.image_url} alt={pro.name} />
              </td>
              <td>{pro.price}</td>
              <td>{pro.status ? "active" : "inactive"}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(pro)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(pro.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <Link to={"update-product"}>Edit PRODUCT</Link> */}
    </div>
  );
}
