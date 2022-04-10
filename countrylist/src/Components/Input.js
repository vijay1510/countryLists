import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Input() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className='header_box'>
        <input
          className='header_input'
          placeholder='Search By Country/Region'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <span>
        <SearchIcon className='header_span' fontSize='large' />
      </span>
    </>
  );
}
