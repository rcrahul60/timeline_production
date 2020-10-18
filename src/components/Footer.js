import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Container } from '@material-ui/core';

function Footer() {
	return (
		<div className="footer-container">
			{/* <Container maxWidth="sm" style={{ backgroundColor: 'white' }}>
				<ContactForm />
			</Container> */}

			<section className="social-media">
				<div className="social-icons">
					<Link
						class="social-icon-link facebook"
						to="/"
						target="_blank"
						aria-label="facebook">
						<i class="fab fa-facebook-f" />
					</Link>
					<Link
						class="social-icon-link instagram"
						to="/"
						target="_blank"
						aria-label="Instagram">
						<i class="fab fa-instagram" />
					</Link>
					<Link
						class="social-icon-link whatsapp"
						to="/"
						target="_blank"
						aria-label="Whatsapp">
						<i class="fab fa-whatsapp" />
					</Link>
				</div>
			</section>

			<section>
				<small className="website-rights">
					Timeline Production © 2020 All right reserved
				</small>
			</section>
		</div>
	);
}

export default Footer;
