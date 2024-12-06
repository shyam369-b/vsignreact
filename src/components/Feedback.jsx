import React from 'react'
import Feedbackimg from '../assets/feedba.png'

function Feedback() {
  return (
        <div className='feedback-container'>
          
            <div className='card'>
                <h1>What Our <span>Clients</span> Say !</h1>
                <img src={Feedbackimg} alt='Feedback'/>
                <p> Working with VSign has been an absolute game-changer for our brand. Their team of experts delivered high-quality, precision-crafted signage that perfectly represents our identity. From the design phase to installation, they ensured every detail was perfect. The customer service was outstanding, and the final result exceeded our expectations. With a rating of 4.52/5, it’s no surprise that they’ve earned a reputation for excellence. If you want signage that leaves a lasting impression and elevates your brand's worth, VSign is the way to go. Highly recommend! </p>
                <h3>Kishore Pandey</h3>
                <h3>Managing Director</h3>
            </div>
            
        
        </div>
  )
}

export default Feedback
