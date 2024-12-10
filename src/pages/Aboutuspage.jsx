import React from 'react'
import Navbar2 from '../components/Navbar2'
import Banner from '../components/aboutpagecomp/aboutbanner'
import Introduction from '../components/aboutpagecomp/Aboutpageintroduction'
import Counter from '../components/Counter'
import Team from '../components/aboutpagecomp/teamsection'
import Allpagecontact from '../components/Allpagecontact'
import Footer from '../components/Footer'

function Aboutuspage() {
  return (
    <div className='page-wrapper'>
        <Navbar2 />
        <Banner />
        <Introduction />
        <Counter />
        <Team />
        <Allpagecontact />
        
        

        <Footer />
      
    </div>
  )
}

export default Aboutuspage
