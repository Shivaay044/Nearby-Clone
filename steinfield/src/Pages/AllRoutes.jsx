import React from "react";
import {Route, Routes} from "react-router-dom"

function AllRoutes() {
  return (
    <Routes>
        <Route path={"/"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/product"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/product/:id"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/cart"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/checkout"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/admin"}  element={<h1>Hello World</h1>}/ >
        <Route path={"/login"}  element={<h1>Hello World</h1>}/ >
    </Routes>
  );
}

export default AllRoutes;
