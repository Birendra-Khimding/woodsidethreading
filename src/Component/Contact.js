import React from "react";
import cImg from "../Images/service-4.png";
import {ImHome3} from "react-icons/im";
import {MdOutlineContactMail} from "react-icons/md";
import {AiFillInstagram} from "react-icons/ai";
import {BiLogoFacebookSquare} from "react-icons/bi";
import "./Contact.css";

function Contact(){

    const hIcon = (<ImHome3 className="hic" size="30px" color="white"/>);
    const cIcon = (<MdOutlineContactMail className="cic" size="30px" color="white"/>);
    const iIcon = (<AiFillInstagram className="iic" size="30px" color="white"/>);
    const fIcon = (<BiLogoFacebookSquare className="fic" size="30px" color="white"/>);
    return(
        <>
        <div className="hCtn">
        <div className="hTitle">
        <h2>Contact Us</h2>
        <hr className="section-divider" />
        </div>
        <section className="ct-ctn">
        <article className="art">
             <p>We'd love to hear from you!
             If you have any questions, comments, 
             or feedback, please feel free to get in touch with us 
             using the contact form below. 
             Our team will get back to you as 
             soon as possible.

             </p>
        </article>
            <article className="art-1">
             <img src={cImg} />
            </article>
            
        </section>
        </div>
        <section className="ct-ctn-1">
        
         <article className="hAddress">
         {hIcon}
         <p>4008 67th Street<br/>
            Woodside, NY 11377
         </p>
         </article>
         <article className="cAddress">
            {cIcon}
         <p>Number: 347-813-4840<br/>
         Email: woodsidethreading.com</p>
         </article>
       
         
         <article className="sAddress">
        <div className="cIcon">
          {iIcon}
          <p> @woodside_threding</p>
          </div>
          <div className="cIcon">
          {fIcon}
          <p>@woodside_threding</p>
          </div>
          {}
         </article >
         
        </section>
        </>
    );
}

export default Contact;