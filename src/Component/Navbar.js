import React, {useState} from "react";
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"
import logo from "../Images/logo4.png";
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import {motion} from 'framer-motion';

function Navbar( ){

    const [menuOpen, setMenuOpen] = useState(false);
    const oIcon = (
    
    <FiMenu className="hamburger" size="30px" color="white"/>
    )
    const cIcon = (
        <motion.div
    className="hamburger"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <AiOutlineClose className="hamburger" size="30px" color="white"/>
    </motion.div>
    )

    const handleLinkClick = () => {
                   if (menuOpen) {
                  setMenuOpen(false);
                     }
                     window.scrollTo(0, 0);
                  };
         
    return(
        <div className="nav-ctn">
        <nav className="nav">
            <div>
           <Link to="/" onClick={handleLinkClick}><img src={logo} alt="Logo" className="logo"/></Link>
            </div>
            <div>
            <Link to ="/" className="title" onClick={handleLinkClick}> Woodside Threading</Link>
            </div>
            
            <div className="menu" onClick={()=>{
                  setMenuOpen(!menuOpen);
                  }}>
             {menuOpen? cIcon: oIcon}
            </div>
            
            <ul className={menuOpen ? "open": ""}>
          <li>
            <NavLink to="/services" onClick={handleLinkClick}>Services</NavLink>
        </li>
        <li>
            <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>
        </li>
            </ul>
            
        </nav>
        
        </div>
    );
}

export default Navbar;