import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import React from 'react';
import Whoarewe from "./pages/Whoarewe";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Who-are-we" element={<Whoarewe/>}/>
            <Route exact path="/Services" element={<Services/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
