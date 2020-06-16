import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Card,
  Box,
} from "@material-ui/core";

const PassengerTable = (props) => {
  const { classes, list } = props;
  const columns = [
    { column: "Seat No" },
    { column: "Passenger Name" },
    { column: "Boarding Point" },
    { column: "Mobile" },
    { column: "PNR Number" },
    { column: "Destination" },
    { column: "User" },
  ];
  const innerList = [{ column: "seatNumber" }, { column: "passengerName" }];
  const outerList = [
    { column: "boardingPoint" },
    { column: "mobile" },
    { column: "pnrNumber" },
    { column: "toCity" },
    { column: "userName" },
  ];
  return (
    <Card>
      <Box displayPrint="none">
        <Table className={classes.table}>
          <TableRow className={classes.tablehead}>
            {columns.map((item) => {
              return <TableCell>{item.column}</TableCell>;
            })}
          </TableRow>
          {/* </TableHead> */}
          {list.length ? (
            list.map((item) => {
              return item.passengerList.map((header) => {
                return (
                  <TableRow className={classes.tablerow}>
                    {innerList.map((il) => {
                      return <TableCell>{header[il.column]}</TableCell>;
                    })}
                    {outerList.map((ol) => {
                      return <TableCell>{item[ol.column]}</TableCell>;
                    })}
                  </TableRow>
                );
              });
            })
          ) : (
            <TableRow className={classes.tablerow}>
              <TableCell colSpan={columns.length} align="center">
                No Records found
              </TableCell>
            </TableRow>
          )}
        </Table>
      </Box>
      <Box display="none" displayPrint="block">
        <table style={{ width: "100%" }}>
          <tr style={{ background: "#8e8e8e", color: "#fff" }}>
            <td style={{ padding: "5px 10px" }}>Seat No</td>
            <td style={{ padding: "5px 10px" }}>Passenger Name</td>
            <td style={{ padding: "5px 10px" }}>Boarding Point</td>
            <td style={{ padding: "5px 10px" }}>Mobile</td>
            <td style={{ padding: "5px 10px" }}>PNR Number</td>
            <td style={{ padding: "5px 10px" }}>Destination</td>
            <td style={{ padding: "5px 10px" }}>User</td>
          </tr>
          {list.length ? (
            list.map((item) => {
              return item.passengerList.map((header) => {
                return (
                  <tr className={classes.tablerow}>
                    {innerList.map((il) => {
                      return (
                        <td style={{ padding: "5px 10px",fontSize : "16px" }}>
                          {header[il.column]}
                        </td>
                      );
                    })}
                    {outerList.map((ol) => {
                      return <td>{item[ol.column]}</td>;
                    })}
                  </tr>
                );
              });
            })
          ) : (
            <tr className={classes.tablerow}>
              <td colSpan={columns.length} align="center">
                No Records found
              </td>
            </tr>
          )}
        </table>
      </Box>
    </Card>
  );
};

export default withStyles(Styles, { withTheme: true })(PassengerTable);
