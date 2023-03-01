import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="row">
      {/* Sidebar */}
      <div className="col-2 ">
        <ul className="list-group  ">
          <Link to={"/admin"} className="list-group-item text-light bg-dark">
            Product
          </Link>
          <Link to={"/admin/category"} className="list-group-item">
            Category
          </Link>
          <Link to={"/admin/user"} className="list-group-item">
            User
          </Link>
          <Link to={"/admin/order"} className="list-group-item">
            Order
          </Link>
        </ul>
      </div>
      {/* Sidebar */}
      {/* COntent */}
      <div className="col-10">
        <Outlet />
      </div>
      {/* COntent */}
    </div>
  );
}
