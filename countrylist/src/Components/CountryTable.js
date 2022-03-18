import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../Redux/Action";

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
  console.log(countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <>
      <TableContainer
        sx={{
          maxWidth: 1000,
          margin: "0 auto",
          backgroundColor: "#E0F2F1",
        }}
        component={Paper}>
        <Table sx={{}} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>FLAG</StyledTableCell>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell>CAPITAL</StyledTableCell>
              <StyledTableCell>REGION</StyledTableCell>
              <StyledTableCell>SUB-REGION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((row) => (
              <StyledTableRow key={row.name.common}>
                <StyledTableCell component='th' scope='row'>
                  <img className='flag' src={row.flags.png} alt={""} />
                </StyledTableCell>
                <StyledTableCell>{row.name.common}</StyledTableCell>
                <StyledTableCell>{row?.capital}</StyledTableCell>
                <StyledTableCell>{row?.region}</StyledTableCell>
                <StyledTableCell>{row?.subregion}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>HELOO WORLD</h1>
    </>
  );
}
