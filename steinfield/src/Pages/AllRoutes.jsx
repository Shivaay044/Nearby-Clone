import React from "react";
import {Route, Routes} from "react-router-dom"
import Login from "./Login";
import HomePage from "./Home/HomePage";
import { AdminPage } from "./AdminPage";
import Checkout from "./Checkout/Checkout";
import { Product } from "./Product/Product";
import SingleProduct from "./SingleProduct/SingleProduct";
import CartItem from "../Components/CartItem";



function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"}  element={<HomePage/>}/ >
        <Route path={"/product"}  element={<Product/>}/ >
        <Route path={"/product/:id"}  element={<SingleProduct/>}/ >
        <Route path={"/cart"}  element={<CartItem/>}/ >
        <Route path={"/checkout"}  element={<Checkout/>}/ >
        <Route path={"/admin"}  element={<AdminPage/>}/ >
        <Route path={"/login"}  element={<Login/>}/ >
    </Routes>
  );
}

export default AllRoutes;
