import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Card,
  CardContent
} from "@material-ui/core";

const PassengerTable = props => {
  const { classes, list } = props;
  const columns = [
    { column: "Seat No" },
    { column: "Passenger Name" },
    { column: "Boarding Point" },
    { column: "Mobile" },
    { column: "PNR Number" },
    { column: "Destination" },
    { column: "Agent" }
  ];
  const innerList = [{ column: "seatNumber" }, { column: "passengerName" }];
  const outerList = [
    { column: "boardingPoint" },
    { column: "mobile" },
    { column: "pnrNumber" },
    { column: "toCity" },
    { column: "agentFare" }
  ];
  return (
    <Card>
      <Table className={classes.table}>
        <TableHead className={classes.tablehead}>
          <TableRow>
            {columns.map(item => {
              return <TableCell>{item.column}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.length ? (
            list.map(item => {
              return item.passengerList.map(header => {
                return (
                  <TableRow className={classes.tablerow}>
                    {innerList.map(il => {
                      return <TableCell>{header[il.column]}</TableCell>;
                    })}
                    {outerList.map(ol => {
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
        </TableBody>
      </Table>
    </Card>
  );
};

export default withStyles(Styles, { withTheme: true })(PassengerTable);
