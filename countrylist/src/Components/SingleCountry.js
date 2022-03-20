import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getSingleCountry } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export default function SingleCountry() {
  const { country } = useParams();
  const singleCountry = useSelector((state) => state.country[0]);
  console.log(singleCountry);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCountry(country));
  }, [dispatch, country]);
  return (
    <>
      <div className='country_header'>
        <Link to='/'>
          <HomeIcon className='country_homeicon' fontSize='large' />
        </Link>
      </div>
      <div className='country_name'>
        <h1>{singleCountry?.name.common}</h1>
      </div>
      <div className='country_details'>
        <img className='country_img' src={singleCountry?.flags.png} alt='' />
      </div>
      <div className='country_accord'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Official Name</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{singleCountry?.name.official}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2a-content'
            id='panel2a-header'>
            <Typography>Capital</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{singleCountry?.capital}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Continent</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{singleCountry?.continents[0]}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>population</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{singleCountry?.population}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* {Object.keys(singleCountry?.languages).map((e) => {
                return <p>{singleCountry?.languages[e]}</p>;
              })} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Maps</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <a
                href={singleCountry?.maps.googleMaps}
                target='_blank'
                rel='noreferrer'>
                Google map
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <h1 style={{ opacity: 0 }}>HELOO WORLD</h1>
    </>
  );
}
