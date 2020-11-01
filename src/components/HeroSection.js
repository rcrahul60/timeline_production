import React from 'react';
import './HeroSection.css';
import '../App.css';
import { Grid } from '@material-ui/core';

function HeroSection() {
    return (
        <Grid container spacing={2} style={{ overflow: 'hidden', height: '85vh', alignContent: 'center' }}>
            <img src="/image/heroSection.jpg" />
        </Grid>
        // <div className='hero-container'>
        //     {/* / <video src='/video/video1.mp4' autoPlay loop muted /> */}

        // </div>
    )
}

export default HeroSection