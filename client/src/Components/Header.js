import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand m-1" href="/">
          MiyanNishar's Blog Application
        </a>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/add-blog">
              Add Blog
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/add-category">
              Add Category
            </Link>
          </li>
        </ul>
        <div className="div-inline mx-auto my-2 my-lg-0">
          <Link to={"/login"}>
            <button className="btn btn-primary m-1">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
