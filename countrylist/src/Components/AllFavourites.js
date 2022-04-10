import React from "react";
import Favourites from "./Favourites";

import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import { removeAll } from "../Redux/Action";

export default function AllFavourites() {
  const fav = useSelector((state) => state.favourites);

  const dispatch = useDispatch();
  return (
    <div className='allfav'>
      <div style={{ backgroundColor: "inherit" }}>
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
            return (
              <Favourites
                key={e?.name.common}
                name={e?.name.common}
                flag={e?.flags.png}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
