import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  addToFavor,
  getSorting,
  getSortRegion,
  getSortPopulation,
  getSortCapital,
} from "../Redux/Action";
import { Link } from "react-router-dom";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: "green",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CountryTable() {
  const countries = useSelector((state) => state.allCounrtry);
  const searchCountries = useSelector((state) => state.searchCountries);
  const favCountry = useSelector((state) => state.favourites);
  const sortBy = useSelector((state) => state.sortBy);
  const { color } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div style={{ marginTop: 70 }}>
      <TableContainer
        sx={{
          maxWidth: 1400,

          margin: "0 auto",
          backgroundColor: "inherit",
        }}
        component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>
                <Button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    fontSize: "larger",
                  }}
                  variant='outlined'>
                  FLAG
                </Button>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    fontSize: "larger",
                  }}
                  variant='outlined'
                  endIcon={
                    <CompareArrowsIcon
                      fontSize='small'
                      color='error'
                      style={{ marginLeft: -8, marginBottom: 4 }}
                    />
                  }
                  onClick={() =>
                    sortBy === "desc"
                      ? dispatch(getSorting("desc"))
                      : dispatch(getSorting("asc"))
                  }>
                  NAME
                </Button>
              </StyledTableCell>
              <StyledTableCell>
                <Button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    fontSize: "larger",
                    marginLeft: -25,
                  }}
                  variant='outlined'
                  endIcon={
                    <CompareArrowsIcon
                      fontSize='small'
                      color='error'
                      style={{ marginLeft: -8, marginBottom: 4 }}
                    />
                  }
                  onClick={() =>
                    sortBy === "desc"
                      ? dispatch(getSortCapital("desc"))
                      : dispatch(getSortCapital("asc"))
                  }>
                  CAPITAL
                </Button>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    fontSize: "larger",
                  }}
                  variant='outlined'
                  endIcon={
                    <CompareArrowsIcon
                      fontSize='large'
                      color='error'
                      style={{ marginLeft: -8, marginBottom: 4 }}
                    />
                  }
                  onClick={() =>
                    sortBy === "desc"
                      ? dispatch(getSortRegion("desc"))
                      : dispatch(getSortRegion("asc"))
                  }>
                  REGION
                </Button>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    fontSize: "larger",
                  }}
                  variant='outlined'
                  endIcon={
                    <CompareArrowsIcon
                      color='error'
                      style={{ marginLeft: -8, marginBottom: 4 }}
                    />
                  }
                  onClick={() =>
                    sortBy === "desc"
                      ? dispatch(getSortPopulation("desc"))
                      : dispatch(getSortPopulation("asc"))
                  }>
                  POPULATION
                </Button>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchCountries &&
              searchCountries?.map((row) => (
                <StyledTableRow key={row.name.common} align='center'>
                  <StyledTableCell component='th' scope='row' align='center'>
                    <img className='flag' src={row.flags.png} alt={""} />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Link
                      to={`single/${row.name.common}`}
                      className='table_link'>
                      {row.name.common}
                    </Link>
                    <span
                      style={{
                        color: favCountry.find(
                          (e) => e.name.common === row.name.common
                        )
                          ? "red"
                          : "lightblue",
                      }}
                      className='table_favicon'>
                      <FavoriteOutlinedIcon
                        onClick={() => dispatch(addToFavor(row))}
                      />
                    </span>
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      color: color,
                    }}>
                    {row?.capital}
                  </StyledTableCell>
                  <StyledTableCell
                    align='left'
                    sx={{
                      color: color,
                    }}>
                    {row?.region}
                  </StyledTableCell>
                  <StyledTableCell
                    align='center'
                    sx={{
                      color: color,
                    }}>
                    {row?.population}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {searchCountries.length === 0 &&
              countries.map((row) => (
                <StyledTableRow key={row.name.common}>
                  <StyledTableCell component='th' scope='row' align='center'>
                    <img className='flag' src={row.flags.png} alt={""} />
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <Link
                      to={`single/${row.name.common}`}
                      className='table_link'>
                      {row.name.common}
                    </Link>
                    <span
                      style={{
                        color: favCountry.find(
                          (e) => e.name.common === row.name.common
                        )
                          ? "red"
                          : "lightblue",
                      }}
                      className='table_favicon'>
                      <FavoriteOutlinedIcon
                        onClick={() => dispatch(addToFavor(row))}
                      />
                    </span>
                  </StyledTableCell>
                  <StyledTableCell
                    align='left'
                    sx={{
                      color: color,
                    }}>
                    {row?.capital}
                  </StyledTableCell>
                  <StyledTableCell
                    align='center'
                    sx={{
                      color: color,
                    }}>
                    {row?.region}
                  </StyledTableCell>
                  <StyledTableCell
                    align='center'
                    sx={{
                      color: color,
                    }}>
                    {row?.population}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1 style={{ opacity: 0 }}>HELOO WORLD</h1>
    </div>
  );
}
