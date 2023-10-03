/** @format */

import { useState } from "react";
import "./App.css";
import Login from "./WELCOME/Login";
import Registration from "./WELCOME/Registration";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="*" element={<h4>This page do not exit fam!</h4>} />
      </Routes>
    </div>
  );
}

export default App;
