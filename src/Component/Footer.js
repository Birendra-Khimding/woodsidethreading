import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <>
    <footer className="footer">
     <div className='footer-content'>
      <div className="company-info">
        <p>Woodside</p>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Woodside. All Rights Reserved.</p>
      </div>
      <div className="social-icons">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebook} />
          <p>@woodside_threding</p>
        </div>
        
        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} />
          <p>@woodside_threding</p>
        </div>
      </div>
      <div className="contact-info">
      <p>Phone: 347-813-4840</p>
        <p>Email: woodsidethreading@gmail.com</p>
        <p>Address: 4008 67th Street, Woodside, NY 11377</p>
      </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;