import React from 'react';
import  './Intro.css'
import img from '../../images/testimonial1.png'
function Intro() {
    return (
        <div className='intro-container'>
        <div className='side-intro'>
            <img src={img} alt = "My Profile" className='profile-img'/>
            <h3>Sanij Shrestha</h3>
            <span>Computer Science @ DePauw University</span>
            <ul>
                <li><a className='social_icon' href='https://github.com/sanijcreates'><i class="uil uil-github"></i>Github</a></li>
                <li><a className='social_icon' href='to:saniz.sth123@gmail.com'><i class="uil uil-envelope"></i>Email</a></li>
                <li><a className='social_icon' hreef = "https://www.linkedin.com/in/sanij-shrestha/"><i class="uil uil-linkedin"></i>LinkedIn</a></li>
            </ul>            
        </div>
        <div className='main-intro'>
            <h1>SANIJ SHRESTHA</h1>
            <hr/>
            <p>Hi, I am a <strong>Computer Science</strong> major student in the <a href = "">Department of Computer Science</a> at <strong><a href = "">DePauw University</a></strong>. </p>
            <br />
            <p>I am especifically interested in the field of Software Development. One of my recente goals has been to get a SWE internship, so if you are looking for a SWE intern, hire me :)</p>
        </div>
        </div>
    )
}

export default Intro;