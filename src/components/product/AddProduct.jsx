import React, { useState } from "react";

import { storage } from "../../firebase";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch } from "react-redux";
import { post_new_product } from "../../redux/actions/actions_product";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newProduct, setNewproduct] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(post_new_product({ ...newProduct, image_url: imageUrl }));
    navigate("/admin");
  };
  return (
    <div>
      <h4>AddProduct</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              value={newProduct.name}
              onChange={(e) =>
                setNewproduct({ ...newProduct, name: e.target.value })
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
              value={newProduct.price}
              onChange={(e) =>
                setNewproduct({ ...newProduct, price: e.target.value })
              }
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={newProduct.description}
              onChange={(e) =>
                setNewproduct({ ...newProduct, description: e.target.value })
              }
              className="form-control"
              rows={3}
            />
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
