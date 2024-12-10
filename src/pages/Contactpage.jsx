import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import Contactdetails from '../components/contactpagecomp/Contactdetails'
import Banner from '../components/contactpagecomp/Banner'
import Contactpageheader from '../components/contactpagecomp/Contactpageheader'

function Contactpage() {
  return (
    <div className='page-wrapper2'>
        <Navbar2 />
        <Banner />
        <Contactpageheader />
        <Contactdetails />

        <Footer />
      
    </div>
  )
}

export default Contactpage
