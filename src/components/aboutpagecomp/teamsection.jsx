import React from 'react'
import team1 from '../../assets/team/team1.jpg'
import team1rmbg from '../../assets/team/team1-removebg.png'
function teamsection() {
  return (
    <div className='aboutpage-team-section'>
        <h1>Our <span>Creative</span> Team</h1>
        <p className='teamline-caption'>Meet the Visionaries Behind VSign</p>
        <p className='team-intro-text'>Our team is the driving force behind every innovative design and flawless execution. With a passion for precision and a commitment to excellence, we work together to create signage solutions that leave a lasting impact.</p>
        <div className='director-container'>
            <div className='director-card'>
                <div className='director-wrapper'>
                    <img src={team1} class="director-cover-image" />
                </div>
                <h3 className='director-title'>MEMBER 01</h3>
                <img src={team1rmbg} class="director-character" />
            </div>
            <div className='team-info'>
                <h2>Designation</h2>
                <h3>Employee Name</h3>
                <p>Description if any </p>
                    
            </div>

        </div>
        <div className='team-members-section'>
            
            <div className='aboutpage-team-container'>
                <div class="teamcard">
                    <div class="team-wrapper">
                        <img src={team1} class="team-cover-image" />
                    </div>
                        <h3 className='team-title'>MEMBER 01</h3>
                        <img src={team1rmbg} class="team-character" />
                </div>
                <div className='team-info'>
                    <h2>Designation</h2>
                    <h3>Employee Name</h3>
                    <p>Description if any </p>
                    
                </div>
        
    
            </div>
            <div className='aboutpage-team-container'>
                <div class="teamcard">
                    <div class="team-wrapper">
                        <img src={team1} class="team-cover-image" />
                    </div>
                        <h3 className='team-title'>MEMBER 01</h3>
                        <img src={team1rmbg} class="team-character" />
                </div>
                <div className='team-info'>
                    <h2>Designation</h2>
                    <h3>Employee Name</h3>
                    <p>Description if any </p>
                    
                </div>
        
    
            </div>
            <div className='aboutpage-team-container'>
                <div class="teamcard">
                    <div class="team-wrapper">
                        <img src={team1} class="team-cover-image" />
                    </div>
                        <h3 className='team-title'>MEMBER 01</h3>
                        <img src={team1rmbg} class="team-character" />
                </div>
                <div className='team-info'>
                    <h2>Designation</h2>
                    <h3>Employee Name</h3>
                    <p>Description if any </p>
                    
                </div>
        
    
            </div>
            
        
        </div>
        
        
        
    </div>
  )
}

export default teamsection
