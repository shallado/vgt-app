import React from 'react';
import FeaturedTrailer from './FeaturedTrailer';
import TrailerCategory from './TrailerCategory';

const TrailerCollection = () => (
	<div className="trailer-collection">
		<TrailerCategory />
		<TrailerCategory />
		<FeaturedTrailer />
		<TrailerCategory />
		<TrailerCategory />
	</div>
);

export default TrailerCollection;