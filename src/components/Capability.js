import React from 'react';
import CapabilityCard from './CapabilityCard';
import './Capability.css';
import { Grid } from '@material-ui/core';

function Capability() {
	return (
		<div className="capability_cards">
			<h1>Our Capability</h1>
			<div className="cap_cards__container">
				<div className="cards__wrapper">
					<Grid container spacing={2}>
						<Grid item sm={12} md={4}>
						<CapabilityCard text="IN HOUSE STUDIO SET UP" label="We have in house video production setup" src="/image/inhouse.jpg" />

						</Grid>
						<Grid item sm={12} md={4}>
						<CapabilityCard text="HIGH TECHNOLOGY EQUIPMENTS" label="We use state-of-the-art equipment to film and edit every video. Our seasoned professionals ensure that your videos are aesthetically appealing and communicate your message well to the audience." src="/image/hitech.jpg" />

						</Grid>
						<Grid item sm={12} md={4}>
						<CapabilityCard text="TOP-CLASS VIDEOGRAPHY" label="High-Quality Videography Is Our Forte. We Employ Proper Frames,
					Correct Shooting Techniques And Proper Usage Of Color To Capture Your
					Videos. This Makes Your Video Effort Pop And Has The Desired Impact." src="/image/videography.jpg"/>

						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}

export default Capability;
