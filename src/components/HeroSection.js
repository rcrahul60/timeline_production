import React from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection(){
    return (
        <div className='hero-container'>
            <video src='/video/video1.mp4' autoPlay loop muted />
        </div>
    )
}

export default HeroSection