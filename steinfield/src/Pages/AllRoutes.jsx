import React from "react";
import {Route, Routes} from "react-router-dom"
import Login from "../Pages/Login"

function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/product"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/product/:id"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/cart"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/checkout"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/admin"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/login"}  element={<Login/>}/ >
    </Routes>
  );
}

export default AllRoutes;
