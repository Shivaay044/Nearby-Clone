import React from "react";
import {Route, Routes} from "react-router-dom"
import SingleProduct from "./SingleProduct/SingleProduct"
function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/product"}  element={<h1>Hello Product</h1>}/ >
        <Route path={"/product/:id"}  element={<SingleProduct/>}/ >
        <Route path={"/cart"}  element={<h1>Hello Cart</h1>}/ >
        <Route path={"/checkout"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/admin"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/login"}  element={<h1>Hello World</h1>}/ >
    </Routes>
  );
}

export default AllRoutes;
