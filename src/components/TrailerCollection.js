import React from 'react';
import FeaturedTrailer from './FeaturedTrailer';
import TrailerCategory from './TrailerCategory';

const TrailerCollection = () => (
	<div>
		<TrailerCategory />
		<TrailerCategory />
		<FeaturedTrailer />
		<TrailerCategory />
		<TrailerCategory />
	</div>
);

export default TrailerCollection;