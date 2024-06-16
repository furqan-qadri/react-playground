import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import PasswordSetForm from "./components/PasswordSetForm";
// import Home from "./components/Home"; // Uncomment if you have a Home component
// import Login from "./components/Login"; // Uncomment if you have a Login component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<PasswordSetForm />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
