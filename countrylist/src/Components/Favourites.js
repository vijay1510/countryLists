import React from "react";

export default function Favourites({ name, flag }) {
  return (
    <>
      <div className='fav_container'>
        <img className='fav_img' src={flag} alt={name} />
        <span>
          <h3>{name}</h3>
        </span>
      </div>
    </>
  );
}
