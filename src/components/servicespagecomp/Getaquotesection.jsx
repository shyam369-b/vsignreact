import React from 'react'
import Quoteimg from '../../assets/bill_3609225.png'
function Getaquotesection() {
  return (
    <div className='get-a-quote-section'>
        <div className='quote-context'>
            <h1>How do Acrylic <span>LED signages</span> help businesses with effective promotion?</h1>
            <p>Businesses need attention from their customers to drive maximum traffic to their shop. ARC India’s acrylic LED signages act as a silent salesperson that works round the clock to grab people’s attention and turn passersby into potential customers. Place them in any high traffic areas or near by your store location and expand your customer reach. These acrylic glow sign board not only attract customers’ eyeballs but also enhance your brand’s presence, fostering a sense of trust and authenticity.</p>
        </div>
        
        <div class="getaquote-box">
            <div class="getaquoteimg-container">
                <div class="getaquoteimg-inner">
                    <div class="getaquoteinner-skew">
                        <img src={Quoteimg}></img>
                    </div>
                </div>
            </div>
            <div class="getaquotetext-container">
                <h3>Get a Quote !</h3>
                <div>
                    <center><a href="./Contactpage"><button type="submit" class="btncnt">Quote <i class="fa-solid fa-angles-right"></i></button> </a></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getaquotesection
