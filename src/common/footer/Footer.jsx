import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Shopify</h1>
            <p>An e-commerce platform that allows 
               businesses to create, manage, and grow online stores. </p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Islamabad</li>
              <li>Email: haasham93@gmail.com</li>
              <li>Phone: +92 300 3566659</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
