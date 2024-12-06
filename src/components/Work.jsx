import React from 'react'
import Work1 from '../assets/portfolio/port1.JPG'
import Work2 from '../assets/portfolio/port2.JPG'
import Work3 from '../assets/portfolio/port4.JPG'
import Work4 from '../assets/portfolio/port8.JPG'
import Work5 from '../assets/portfolio/port7.PNG'
import Work6 from '../assets/portfolio/port5.JPG'
function Work() {
  return (
    <div className='work-section'>
        <h3>Why you Choose Us ?</h3>
        <h1>Bringing <span>Designs</span> To Life</h1>
        <h2>Some Of Our Awesome Work </h2>

        
        <div class="hover14 column">
            <div>
                <figure><img src={Work1} alt='work'/></figure>
                <span>Client </span>
            </div>
            <div>
                <figure><img src={Work2} alt='work'/></figure>
                <span>Tru Bakes</span>
            </div>
            <div>
                <figure><img src={Work3} alt='work'/></figure>
                <span>Tara Hotel</span>
            </div>
        </div>
        <div class="hover14 column">
            <div>
                <figure><img src={Work4} alt='work' /></figure>
                <span>Client </span>
            </div>
            <div>
                <figure><img src={Work5} alt='work'/></figure>
                <span>Hotel Godavari</span>
            </div>
            <div>
                <figure><img src={Work6} alt='work'/></figure>
                <span>Sweets Dude</span>
            </div>
        </div>
        <center>
        <a href='/'><button type="submit" class="btncnt">
			See More

		</button> </a>
        </center>
     
      
    </div>
    
  )
}

export default Work
