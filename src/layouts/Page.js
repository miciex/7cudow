import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "../pages/HomePage";
import Cud from "../pages/Cud";
import Galery from "../pages/Galery";
import Form from "../pages/Form";

export default function Page() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="/cud/:id" element={<Cud />}></Route>
      <Route path="/galery" element={<Galery />}></Route>
      <Route path="/Form" element={<Form />}></Route>
    </Routes>
  );
}
