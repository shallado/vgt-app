import React from 'react';

const TrailerCard = () => (
	<div className="trailer-card">
		<img src="img/gears.jpg" alt="gears of war" className="trailer-card__img"></img>
		<div className="trailer-card__content">
			<div className="trailer-card__info">
				<h2 className="trailer-card__title">Gears of War</h2>
				<p className="trailer-card__rating">Rate M</p>
				<p className="trailer-card__game-systems">xboxone - ps4 - nintendo - pc</p>
			</div>
			<div className="trailer-card__btns">
				<button className="trailer-card__btn">
					<ion-icon name="add"></ion-icon>
				</button>
				<button className="trailer-card__btn">
					<ion-icon name="arrow-forward"></ion-icon>
				</button>
			</div>
		</div>
	</div>
);

export default TrailerCard;