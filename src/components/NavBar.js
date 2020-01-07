import React from 'react';
import SearchVideo from './SearchVideo';

const NavBar = () => (
	<nav>
		<div>
			<p>VGT logo</p>
			<ul>
				<li>Home</li>
				<li>Nintendo</li>
				<li>Playstation</li>
				<li>Xbox</li>
				<li>PC</li>
				<li>My list</li>
			</ul>
			<SearchVideo />
		</div>
	</nav>
);

export default NavBar;