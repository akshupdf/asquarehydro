import './App.css';

import { BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from './components/home';
import HomePage from './components/products';
import NavBar from "./components/NavBar";
import React, { Suspense } from 'react';
import HydroTypes from './components/hydroTypes';
import Footer from './components/Footer';
import About from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Loader } from './components/Loader';
import { Quotemaker } from './components/Quote';
import { Preview } from './components/Preview';

function App() {
  return (
    <div className="">

<BrowserRouter>
<NavBar />
<Suspense fallback={<Loader />}>
      <Routes> 
      <Route exact path='/' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route  path='/nft' element={<HomePage />} />
      <Route path="/products" element={<HydroTypes />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/load" element={<Loader />} />
      <Route path="/quote" element={<Quotemaker />} />
      <Route path="/preview" element={<Preview />} />
      </Routes>
      </Suspense>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
