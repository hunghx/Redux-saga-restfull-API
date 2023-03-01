import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import AddProduct from "./components/product/AddProduct";
import ListProduct from "./components/product/ListProduct";
import UpdateProduct from "./components/product/UpdateProduct";

function App() {
  return (
    <Routes>
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
