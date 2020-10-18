import React from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery, useTheme} from '@material-ui/core'
// import tempImage from '../../public/image/documentry.jpg';

function CapabilityCard(props) {
	const theme = useTheme();
	const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
	console.log(isMobileView, 'check it')
	return (
		<div
			style={{
				width: '100%',
				margin: '0px 20px',
				backgroundColor: 'white',
				paddingBottom: '15px',
			}}>
			<img
				style={{ width: '100%', borderRadius: '20px 20px 0px 0px' }}
				src={props.src}
				alt="Corporate Films"
			/>

			<div
				style={{
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}>
				<h3 style={{ marginBottom: '10px' }}>{props.text}</h3>
				<span style={{ fontSize: '0.9rem', textAlign: 'center' }}>
					{props.label}
				</span>
			</div>
		</div>
	);
}

export default CapabilityCard;
