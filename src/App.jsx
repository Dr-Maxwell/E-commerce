/** @format */

import { useState } from "react";
import "./App.css";
import Login from "./WELCOME/Login";
import { GeneralLayout } from "./WELCOME/GeneralLayout";
import Registration from "./WELCOME/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./WELCOME/Home";
import { PurchaseProduct } from "./WELCOME/PurchaseProduct";
function App() {
  const router = createBrowserRouter([
    {
      element: <GeneralLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/product/:id/:productname", element: <PurchaseProduct /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Registration /> },
  ]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
