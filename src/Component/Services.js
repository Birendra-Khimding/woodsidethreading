import React from "react";
import "./Services.css";
import { useRef } from "react";

function Services() {

   const threading = useRef(null);
   const waxing = useRef(null);
   const facial = useRef(null);
   const eyelash = useRef(null);
   const heena = useRef(null);

   const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
   }

    return (
        <>
    <div className="bck">
    <div className="scrl">
     <ul>
      <li onClick={()=> scrollToSection(threading)}>Threading</li>
      <li onClick={()=> scrollToSection(waxing)}>Waxing</li>
      <li onClick={()=> scrollToSection(facial)}>Facial</li>
      <li className="eye" onClick={()=> scrollToSection(eyelash)}>Eyelash </li>
      <li className ="hen" onClick={()=> scrollToSection(heena)}>Heena</li>
     </ul>

    </div>
    <hr className="section-divider" />
   <h3 ref={threading}>Threading(Hilo)</h3>
   <hr className="dvd"></hr>
   <article class="grid-container">
  <div class="item">
    <span class="item-title">Eyebrow</span>
    <span class="spc"></span>
    <span class="item-price">$6</span>
  </div>
  <div class="item">
    <span class="item-title">Upper Lip</span>
    <span class="spc"></span>
    <span class="item-price">$5</span>
  </div>
  <div class="item">
    <span class="item-title">Chin</span>
    <span class="spc"></span>
    <span class="item-price">$5</span>
  </div>
  <div class="item">
    <span class="item-title">Nose(Outside)</span>
    <span class="spc"></span>
    <span class="item-price">$5</span>
  </div>
  <div class="item">
    <span class="item-title">Nose(Inside)</span>
    <span class="spc"></span>
    <span class="item-price">$10</span>
  </div>
  <div class="item">
    <span class="item-title">Lower Lip</span>
    <span class="spc"></span>
    <span class="item-price">$3</span>
  </div>
  <div class="item">
    <span class="item-title">Forehead</span>
    <span class="spc"></span>
    <span class="item-price">$5</span>
  </div>
  <div class="item">
    <span class="item-title">Side</span>
    <span class="spc"></span>
    <span class="item-price">$10</span>
  </div>
  <div class="item">
    <span class="item-title">Ear</span>
    <span class="spc"></span>
    <span class="item-price">$10</span>
  </div>
  <div class="item">
    <span class="item-title">Full Face</span>
    <span class="spc"></span>
    <span class="item-price">$25</span>
  </div>
  <div class="item">
    <span class="item-title">Neck</span>
    <span class="spc"></span>
    <span class="item-price">$10</span>
  </div>
</article>
  <h3 ref={waxing}>Waxing(cera)</h3>
  <hr className="dvd"></hr>
  <article class="grid-container">
  <div class="item">
    <span class="item-title">Full Arms</span>
    <span class="spc"></span>
    <span class="item-price">$25</span>
</div>
<div class="item">
    <span class="item-title">Half Arms</span>
    <span class="spc"></span>
    <span class="item-price">$20</span>
</div>
<div class="item">
    <span class="item-title">Under Arms</span>
    <span class="spc"></span>
    <span class="item-price">$12</span>
</div>
<div class="item">
    <span class="item-title">Full Legs</span>
    <span class="spc"></span>
    <span class="item-price">$40</span>
</div>
<div class="item">
    <span class="item-title">Upper Half Legs</span>
    <span class="spc"></span>
    <span class="item-price">$25</span>
</div>
<div class="item">
    <span class="item-title">Lower Half Legs</span>
    <span class="spc"></span>
    <span class="item-price">$25</span>
</div>
<div class="item">
    <span class="item-title">Lower Back</span>
    <span class="spc"></span>
    <span class="item-price">$35</span>
</div>
<div class="item">
    <span class="item-title">Full Back</span>
    <span class="spc"></span>
    <span class="item-price">$15</span>
</div>
<div class="item">
    <span class="item-title">Bikini Line</span>
    <span class="spc"></span>
    <span class="item-price">$15</span>
</div>
<div class="item">
    <span class="item-title">Full Bikini</span>
    <span class="spc"></span>
    <span class="item-price">$30</span>
</div>
<div class="item">
    <span class="item-title">Brazilian</span>
    <span class="spc"></span>
    <span class="item-price">$30</span>
</div>
</article>
<h3 ref={facial}>Facial</h3>
<hr className="dvd"></hr>
<article class="grid-container">
<div class="item">
    <span class="item-title">Express Facial</span>
    <span class="spc"></span>
    <span class="item-price">$35</span>
</div>
<div class="item">
    <span class="item-title">Herbal Facial</span>
    <span class="spc"></span>
    <span class="item-price">$45</span>
</div>
<div class="item">
    <span class="item-title">Gold Facial</span>
    <span class="spc"></span>
    <span class="item-price">$55</span>
</div>
<div class="item">
    <span class="item-title">Seaweed Facial</span>
    <span class="spc"></span>
    <span class="item-price">$65</span>
</div>
<div class="item">
    <span class="item-title">Four Layer Facial</span>
    <span class="spc"></span>
    <span class="item-price">$85</span>
</div>

  </article> 
  
  <h3 ref={eyelash}>Eyelash Extension(Pestana)</h3>
  <hr className="dvd"></hr>
  
  <article class="grid-container">
  <div class="item">
    <span class="item-title">Strip Lashes</span>
    <span class="spc"></span>
    <span class="item-price">$10</span>
</div>
<div class="item">
    <span class="item-title">Eyelash Removal</span>
    <span class="spc"></span>
    <span class="item-price">$10</span>
</div>
<div class="item">
    <span class="item-title">Cluster Lashes</span>
    <span class="spc"></span>
    <span class="item-price">$25</span>
</div>
<div class="item">
    <span class="item-title">3D Eyelashes</span>
    <span class="spc"></span>
    <span class="item-price">$50</span>
</div>
<div class="item">
    <span class="item-title">Eyelashes Lift</span>
    <span class="spc"></span>
    <span class="item-price">$60</span>
</div>
  </article>
 


  <h3 ref={heena}>Heena</h3>
  <hr className="dvd"></hr>
  <article class="grid-container">
  <div class="item">Henna Tattoos<span class="spc"></span>$7+</div>
  </article>

</div>
</>
    );
}

export default Services;