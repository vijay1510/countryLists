import React from "react";

export default function Favourites({ name, flag }) {
  return (
    <>
      <div className='fav_container'>
        <img className='fav_img' src={flag} alt={name} />
        <span>
          <p>{name}</p>
        </span>
      </div>
    </>
  );
}
