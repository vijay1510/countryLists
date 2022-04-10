import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getSingleCountry } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function SingleCountry() {
  const { country } = useParams();
  const singleCountry = useSelector((state) => state.country[0]);

  const dispatch = useDispatch();
  const defaultKey = () => {
    return Math.floor(Math.random() * 256);
  };

  useEffect(() => {
    dispatch(getSingleCountry(country));
  }, [dispatch, country]);
  return (
    <>
      <div className='single'>
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
              <Typography color='secondary'>Official Name</Typography>
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
              <Typography color='secondary'>Capital</Typography>
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
              <Typography color='secondary'>Continent</Typography>
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
              <Typography color='secondary'>population</Typography>
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
              <Typography color='secondary'>Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {singleCountry &&
                  Object.keys(singleCountry?.languages).map((e) => {
                    return (
                      <li key={defaultKey()}>{singleCountry?.languages[e]}</li>
                    );
                  })}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'>
              <Typography color='secondary'>Maps</Typography>
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
        <div>
          <h1 style={{ opacity: 0 }}>heloo world</h1>
        </div>
      </div>
    </>
  );
}
