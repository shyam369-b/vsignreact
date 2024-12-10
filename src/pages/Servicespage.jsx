import React from 'react'
import Navbar2 from '../components/Navbar2'
import Servicepagebanner from '../components/servicespagecomp/Servicepagebanner'
import Getaquotesection from '../components/servicespagecomp/Getaquotesection'
import Services from '../components/Services';
import Featuresection from '../components/servicespagecomp/Featuresection'
import Faqsection from '../components/servicespagecomp/Faqsection'
import Allpagecontact from '../components/Allpagecontact'
import Footer from '../components/Footer'

function Servicespage() {
  return (
    <div className='page-wrapper'>
        <Navbar2 />
        <Servicepagebanner />
        <Getaquotesection />
        <Services />
        <Featuresection />
        <Faqsection />
        <Allpagecontact />
        
        

        <Footer />
      
    </div>
  )
}

export default Servicespage
