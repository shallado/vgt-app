import React from 'react';
import TrailerCard from './TrailerCard';

const TrailerCategory = () => (
	<div className="trailer-category">
		<div className="trailer-category__heading">
			<h2 className="trailer-category__title">Trailer Category</h2>
			<p className="trailer-category__status-bar">- - - -</p>
		</div>
		<div className="trailer-category__trailer-cards">
			<TrailerCard />
			<TrailerCard />
			<TrailerCard />
			<TrailerCard />
			<TrailerCard />
			<TrailerCard />
		</div>
	</div>
);

export default TrailerCategory;