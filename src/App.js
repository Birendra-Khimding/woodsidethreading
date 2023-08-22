
import './App.css';
import Navbar from './Component/Navbar';
import {Route, Routes} from "react-router-dom";
import Services from './Component/Services';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;
