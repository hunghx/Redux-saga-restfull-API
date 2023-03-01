import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"cart"}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
