import React from 'react';
import Trailer from './Trailer';

const TrailerCategory = () => (
	<div className="trailer-category">
		<div className="trailer-category__heading">
			<h2 className="trailer-category__title">Trailer Category</h2>
			<p className="trailer-category__status-bar">- - - -</p>
		</div>
		<Trailer />
	</div>
);

export default TrailerCategory;