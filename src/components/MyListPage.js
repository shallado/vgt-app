import React from 'react';
import NavBar from './NavBar';

const MyListPage = () => (
	<div className="listpage">
		<NavBar />
		<div className="listpage__header">
			<h1>My List</h1>
			<div>
				<label>Sort By</label>
				<select>
					<option value="year released">Year Released</option>
					<option value="a-z">A-Z</option>
					<option value="z-a">Z-A</option>
				</select>
			</div>
		</div>
	</div>
);

export default MyListPage;