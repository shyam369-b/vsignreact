import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Contactdetails from '../components/contactpagecomp/Contactdetails'
import Banner from '../components/contactpagecomp/Banner'

function Contactpage() {
  return (
    <div className='page-wrapper2'>
        <Navbar2 />
        <Banner />
        <Contactdetails />

        <Footer />
      
    </div>
  )
}

export default Contactpage
