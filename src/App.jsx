/** @format */

import { useState } from "react";
import "./App.css";
import Login from "./WELCOME/Login";
import Registration from "./WELCOME/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./WELCOME/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
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
