import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Nav from "./Components/Header";
import AddBlog from "./Pages/AddBlog";
import AddCategory from "./Pages/AddCategory";
import SingleBlog from "./Pages/SingleBlog";

const App = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/single-blog" element={<SingleBlog />} />
      </Routes>
    </>
  );
};

export default App;
