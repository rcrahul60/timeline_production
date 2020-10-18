import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="services_cards">
			<h1>Video Prodcution Services</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="/image/corporate.jpg"
							text="Corporate films are one of the best communication
                         mediums through which corporate companies or Industries
                          speak about themselves or present themselves to the entire world"
							label="Corporate Films"
							path="#"
							alt="Corporate Films"
						/>

						<CardItem
							src="/image/product.jpg"
							text="Product demo video explains how something works. 
                        Demo videos also urge people to buy the items by showing how to solve a problem.
                         Often, a product demo video tells a story customers have worked out in their minds.
                         "
							label="Product Demo Video"
							path="#"
							alt="Product Demo Video"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="/image/documentry.jpg"
							text="The documentaries that we make are known for being accurate, 
                        informative and clear to their purpose. We give our best efforts and cover the entirety of your organization, 
                        its history, charitable works and other crucial details."
							label="Documentry Films"
							path="#"
							alt="Documentry Films"
							
						/>

						<CardItem
							src="/image/digital_film.jpg"
							text="When it comes to TVC and Digital films our contacts in main stream Film industry 
                        gives us an edge over our competition because 
                        we provide best TVCs in pocket friendly cost."
							label="TVC/Digital Films"
							path="#"
							alt="TVC/Digital Films"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
