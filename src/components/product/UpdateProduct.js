import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { storage } from "../../firebase";
import { update_product } from "../../redux/actions/actions_product";

export default function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let productUpdate = useLocation().state;
  const [updateProduct, setUpdateproduct] = useState({
    name: "",
    price: 0,
    description: "",
    status: true,
  });
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = (e) => {
    let imageUpload = e.target.files[0];
    if (imageUpload == null) return;
    const imageRef = ref(storage, `uploadImage/${imageUpload.name}${v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };

  useEffect(() => {
    setImageUrl(productUpdate.image_url);
    setUpdateproduct({
      name: productUpdate.name,
      description: productUpdate.description,
      price: productUpdate.price,
    });
  }, [productUpdate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      update_product({
        ...productUpdate,
        image_url: imageUrl,
        ...updateProduct,
      })
    );
    navigate("/admin");
  };
  return (
    <div>
      <h4>AddProduct</h4>
      <form onSubmit={handleUpdate}>
        <div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={updateProduct.name}
              onChange={(e) =>
                setUpdateproduct({ ...updateProduct, name: e.target.value })
              }
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              onChange={uploadImage}
              className="form-control"
            />
            <div>
              <img width={100} src={imageUrl} alt="" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              value={updateProduct.price}
              onChange={(e) =>
                setUpdateproduct({ ...updateProduct, price: e.target.value })
              }
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={updateProduct.description}
              onChange={(e) =>
                setUpdateproduct({
                  ...updateProduct,
                  description: e.target.value,
                })
              }
              className="form-control"
              rows={3}
            />
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
