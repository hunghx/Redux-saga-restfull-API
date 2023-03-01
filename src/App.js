import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddProduct from "./components/product/AddProduct";
import ListProduct from "./components/product/ListProduct";
import UpdateProduct from "./components/product/UpdateProduct";
import Products from "./components/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<ListProduct />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="update-product" element={<UpdateProduct />} />
      </Route>
      {/* khai baos cacs router con laij */}
    </Routes>
  );
}

export default App;
