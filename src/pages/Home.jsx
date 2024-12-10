import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react'
import Hero from '../components/Hero';
import Workflow from '../components/Workflow'
import Counter from '../components/Counter';
import Intro from '../components/Intro';
import Feedback from '../components/Feedback';
import Work from '../components/Work'
import Services from '../components/Services';

function Home() {
  return (
    <div className='page-wrapper'>
        <Navbar />
        <Hero />
        <Counter />
        <Intro />
        <Services />
        <Work />
        <Workflow />
        <Feedback />
        
       
      <div className='content'>
        

      </div>
      <Footer />
    </div>
  )
}

export default Home
