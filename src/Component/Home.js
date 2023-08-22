import React from "react";
import Carousel from "./Carousel";
import hero from "../Images/hero-2.jpg";

import "./Home.css";


function Home(){

    return(
        
        <>
        
        <section className="hBack">
            <article className="text-ctn">
            <p className="q-text">“Don't just take our word for it, <br/>
                Experience our service yourself and discover the difference"

            </p>
            <p className="off-text">
              First visit 10% off <br/>
              Full Body Waxing and Facial
            </p>
            </article>
            <article className="img-ctn">
                <img src={hero} />
            </article>
        </section>
       
        <hr className="section-divider" />
          <h2>"Discover Beauty Beyond Limits: Unveil Your Perfect You"</h2>
        <section className="cSection"><Carousel /></section>
        </>
    );
}

export default Home;