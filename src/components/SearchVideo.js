import React from 'react';

const SearchVideo = () => (
  <form className="search-form">
    <input type="text" placeholder="Video Game" className="search-form__input"/>
    <button className="search-form__btn">
      <ion-icon name="search"></ion-icon>
    </button>
  </form>
);

export default SearchVideo;