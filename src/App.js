import './App.css';

import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from './components/home';
import HomePage from './components/products';
import NavBar from "./components/NavBar";
import React from 'react';
import HydroTypes from './components/hydroTypes';
import Footer from './components/Footer';
import About from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="">

<BrowserRouter>
<NavBar />
<React.Suspense fallback={<p>Loading...</p>}>
      <Routes> 
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route  path='/nft' element={<HomePage />} />
      <Route path="/products" element={<HydroTypes />} />
      <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </React.Suspense>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
