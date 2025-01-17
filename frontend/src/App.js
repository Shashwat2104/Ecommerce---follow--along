import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignupPage />} />
    </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <h1 className="text-4xl font-bold text-center">Hello World</h1>
    // </div>
  );
};

export default App;
