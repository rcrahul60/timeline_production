import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
	return (
		<>
			<li className="cards__item">
				<Link className="cards__item__link" to={props.path}>
					<div className="card_img_wrapper">
						<img
							src={props.src}
							alt={props.alt}
							className="cards__item__img"
						/>
						<div
							style={{
								dispaly: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								filter: 'brightness(50%)',
								padding: '15px 15px',
								backgroundColor: 'grey',
								opacity: '0.5',
								height: '54px',
							}}></div>
						<span
							style={{
								fontSize: '20px',
								color: 'white',
								position: 'absolute',
								bottom: '12px',
								left: '50%',
								transform: `translate(-50%, 0)`,
							}}>
							{props.label}
						</span>
					</div>
					<div className="cards__item__info">
						<h5 className="cards__item__text">{props.text}</h5>
					</div>
				</Link>
			</li>
		</>
	);
}

export default CardItem;
