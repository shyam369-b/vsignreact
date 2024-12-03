import Navbar from '../components/Navbar';
import Vediobackground from '../components/Vediobackground';
import Footer from '../components/Footer';
import Clients from '../components/Clients'
import React from 'react'

function Home() {
  return (
    <div className='page-wrapper'>
        <Navbar />
        <Vediobackground />
       
      <div className='content'>
        <Clients />

      </div>
      <Footer />
    </div>
  )
}

export default Home
