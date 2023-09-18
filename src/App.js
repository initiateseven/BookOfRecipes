
import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Singlemeal from "./Containers/Singlemeal/Singlemeal.js";
import {BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Mymeals from "./Containers/Mymeals/Mymeals.js";
import Searchpage from "./Containers/Searchpage/Searchpage.js";




function App() {
  return (  
    <Router>    
      <div className="App">
          <Navbar />
          <Header /> 
          <Routes> 
            <Route path="/singlemeal" element={<Singlemeal/>}/>
            <Route path="/searchpage" element={<Searchpage/>}/>
            <Route path="/mymeals" element={<Mymeals/>}/>
          </Routes>      
          <Footer />
      </div>
    </Router>
  );
}

export default App;
