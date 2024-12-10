import React from 'react'
import Contactclip from '../../assets/contactclip.png'
function Contactdetails() {
  return (
    <div className='contactpage-main-section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.732773619619!2d78.55329518367166!3d17.37658709155516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f1915ac63b%3A0x3969b507ad883a6e!2sVSign%20LED%20board!5e0!3m2!1sen!2sin!4v1733551740550!5m2!1sen!2sin" ></iframe>
         
         <div class="contactpage-container">
            
            
            <div class="form">
                <div class="contact-info">
                    <h3 class="title">Let's get in touch</h3>
                    <p class="text">
                        Feel Free To Connect With Us!
                </p>
                
                <div class="info">
                    <div class="information">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Plot No. 27 &28, Rd Number 1, Samathapuri Colony, New Nagole Colony, Samathapuri, Nagole, Hyderabad, Telangana - 500035</p>
                    </div>
                    <div class="information">
                        <i class="fa-regular fa-envelope"></i>
                        <p>contact@vsignpvtltd.com info@vsignpvtltd.com</p>
                    </div>
                    <div class="information">
                        <i class="fa-solid fa-phone-volume"></i>
                        <p>+91 9949066700<br></br>+91 9908706363</p>
                    </div>
                </div>

                <div class="social-media">
                    <p>Connect with us :</p>
                    <div class="social-icons">
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            
                <div class="contact-form">
                    <span class="circle one"></span>
                    <span class="circle two"></span>

                    <form action="" autocomplete="off">
                        <h3 class="title">Contact us</h3>
                        <div class="input-container">
                            <input type="text" name="name" class="input" />
                            <label for="">Username</label>
                            <span>Username</span>
                        </div>
                        <div class="input-container">
                            <input type="email" name="email" class="input" />
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>
                        <div class="input-container">
                            <input type="tel" name="phone" class="input" />
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div class="input-container textarea">
                            <textarea name="message" class="input"></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>
                        <input type="submit" value="Send" class="contactpage-btn" />
                    </form>
                    </div>
                </div>
            </div>
            
      
    </div>
  )
}

export default Contactdetails
