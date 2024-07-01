import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Register from "./Register";
import Homepage from "./users/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="" element={<Signin />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="dashboard" element={<Homepage />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
