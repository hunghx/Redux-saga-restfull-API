import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";

import Products from "./components/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
