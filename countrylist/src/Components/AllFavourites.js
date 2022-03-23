import React from "react";
import Favourites from "./Favourites";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { removeAll } from "../Redux/Action";

export default function AllFavourites() {
  const fav = useSelector((state) => state.favourites);
  console.log(fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className='country_header'>
        <Link to='/'>
          <HomeIcon className='country_homeicon' fontSize='large' />
        </Link>
      </div>
      <h1 className='all_h1'>Favourites</h1>
      <div className='all_button'>
        {fav.length !== 0 && (
          <Button
            onClick={() => dispatch(removeAll())}
            className='all_button'
            variant='contained'
            color='error'>
            REMOVE ALL
          </Button>
        )}
      </div>
      <div className='all_container'>
        {fav.map((e) => {
          return <Favourites name={e?.name.common} flag={e?.flags.png} />;
        })}
      </div>
    </>
  );
}
