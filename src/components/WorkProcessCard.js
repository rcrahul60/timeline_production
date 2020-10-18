import React from 'react';

function WorkProcessCard({ heading, text }) {
	return (
		<li className="cards__item">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					borderRadius: '20px',
					backgroundColor: '	#F0F0F0',
					padding: '25px 10px',
					boxShadow: '9px 9px 3px 0px #00A0C9',
				}}>
				<i
					class="fas fa-address-book"
					style={{ fontSize: '40px', paddingBottom: '10px' }}></i>
				<h3 style={{ marginBottom: '10px' }}>{heading}</h3>
				<span
					style={{ fontSize: '0.9rem', color: '#404040', textAlign: 'center' }}>
					
					{text}
				</span>
			</div>
		</li>
	);
}

export default WorkProcessCard;
