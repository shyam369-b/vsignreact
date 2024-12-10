import React from 'react'
import logo from '../assets/logo_white.png'

const Footer=() => {
        return (
        <div>
           <div class="footer-container">
            <div class="row">
                  <div class="col" id="company">
                      <img src={logo} alt="" class="logo"></img>
                      <p className='logo-caption'>
                        We are specialized in designings, make your business a brand.
                        
                      </p>
                      <div class="social">
                        <a href="/"><i class="fab fa-facebook"></i></a>
                        <a href="/"><i class="fab fa-instagram"></i></a>
                        <a href="/"><i class="fab fa-youtube"></i></a>
                        <a href="/"><i class="fab fa-twitter"></i></a>
                        <a href="/"><i class="fab fa-linkedin"></i></a>
                      </div>
                  </div>


                  <div class="col" id="Services">
                    <h2>Services</h2>
                    <div class="links">
                        <a href="/">ACP Elevation</a>
                        <a href="/">LED Signage</a>
                        <a href="/">Terrace LED Hordings</a>
                        <a href="/"> </a>
        
                    </div>
                    <h2>Services</h2>
                    <div class="links">
                        <a href="/">ACP Elevation</a>
                        <a href="/">LED Signage</a>
                        
        
                    </div>
                  </div>

                  <div class="col" id="useful-links">
                    <h2>Links</h2>
                    <div class="links">
                        <a href="/">Home</a>
                        <a href="/">About Us</a>
                        <a href="/">Our Clients </a>
                        <a href="/">Blogs</a>
                        <a href="/">Behind the scenes</a>
                        <a href="/">Portfolio</a>
                        <a href="/">Contact Us</a>
                        
                    </div>
                  </div>

                  <div class="col" id="contact">
                      <h2>Contact</h2>
                      <div class="contact-details">
                        <i class="fa fa-location"></i>
                        <p>Plot No. 27 &28, Rd Number 1, Samathapuri Colony, New Nagole Colony, Samathapuri, Nagole, Hyderabad, Telangana - 500035</p><br></br>
                      </div><br></br><br></br>
                      <div class="contact-details">
                        <i class="fa fa-phone"></i>
                        <p>+91-9908706363</p>
                        
                      </div><br></br>
                      <div class="contact-details">
                        
                        <i class="fa fa-phone"></i>
                        <p>+91-99490 66700</p>
                      </div>
                      <div class="form">
                        <form action="">
                            <input type='email' placeholder='example@gmail.com'></input>
                            <button><i class="fa fa-paper-plane"></i></button>
                        </form>
                     </div>
                  </div>
            </div>

            
            <div className="footer-copyright">
                <p>&copy; 2024 VSign Pvt Ltd. All Rights Reserved.</p>
            </div>

        </div>
        </div>
    )
}

export default Footer
