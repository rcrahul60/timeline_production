import '../../App.css';
import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import WorkProcess from '../WorkProcess';
import Capability from '../Capability';
import ContactForm from '../ContactForm';
import { Container } from '@material-ui/core';

function Home() {
	return (
		<div style={{ overflow: 'hidden' }}>
			<HeroSection />
			<Cards />

			<WorkProcess />
			<Capability />

			<Footer />
		</div>
	);
}

export default Home;
