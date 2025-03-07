import React , { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
return(
  <Router>
    <Routes>
      <Route path="*" element={<Home/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
      
    </Routes>
  </Router>
    
)
}

export default App;