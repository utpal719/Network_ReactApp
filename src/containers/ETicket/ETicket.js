import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  withStyles,
  Paper,
  Box,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { Styles } from "./Styles";
import PassengerDetailContainer from "./PassengerDetailContainer/PassengerDetailContainer";
import CancellationPolicy from "./CancellationPolicy/CancellationPolicy";
import ImportantContacts from "./ImportantContacts/ImportantContacts";
import { useHistory } from "react-router-dom";
import { eTicket } from "../../apis/bookings";
import NoRecord from "../../components/NoRecord/NoRecord";
import BoardingDetails from "./BoardingDetails/BoardingDetails";
import AppLink from "./AppLink/AppLink";
import TimeCard from "./TimeCard/TimeCard";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import ETicketHeader from "./ETicketHeader/ETicketHeader";
import { ArrowForwardRounded } from "@material-ui/icons";
import logo from "./logo1.png";

const ETicket = (props) => {
  let history = useHistory();
  let [ticket, setTicket] = useState({});
  let [error, setError] = useState(false);

  let { classes } = props;

  useEffect(() => {
    let pnrNumber = history.location.state.pnrNumber;
    (async () => {
      let data = await eTicket({ pnrNumber });
      if (data) {
        setTicket(data.data);
      } else {
        setError(true);
      }
      props.stopLoading();
    })();
  }, []);

  let handlePrint = (_) => window.print();
  return (
    <>
      <Box displayPrint="none">
        <div className={classes.gridstyle} />
      </Box>
      {error ? (
        <NoRecord
          render={
            <>
              <p>
                <Typography variant="h6">No data found.</Typography>
              </p>
              <p>
                <Typography variant="caption">
                  Kindly ensure that you've entered the correct{" "}
                  <span className={classes.textRed}>
                    <strong>PNR</strong>
                  </span>
                  .
                </Typography>
              </p>
            </>
          }
        />
      ) : (
        <>
          <Box displayPrint="none">
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                {/**Top booking header */}
                <Grid
                  container
                  direction="row"
                  className={classes.eticketContainer}
                  spacing={3}
                >
                  <ETicketHeader
                    ticket={{
                      pnrNumber: ticket.pnrNumber,
                      totalFare: ticket.totalFare,
                    }}
                    handlePrint={handlePrint}
                  />
                  {/**Booking info container */}
                  <Grid item xs={12}>
                    <Paper elevation={2}>
                      <Grid
                        container
                        direction="row"
                        spacing={2}
                        className={classes.paddingTen}
                      >
                        {/**General Info (Booking Id, journeyDate*/}
                        <GeneralInfo
                          ticket={{
                            email: ticket.email,
                            mobile: ticket.mobile,
                            bookingId: ticket.bookingId,
                            journeyDate: ticket.journeyDate,
                          }}
                        />
                        {/**Time card */}
                        <TimeCard ticket={ticket} />
                        {/**Boarding details */}
                        <BoardingDetails ticket={ticket} />
                        {/**Passenger details header */}
                        <PassengerDetailContainer ticket={ticket} />
                        {/**App link */}
                        <AppLink />
                      </Grid>
                      <CancellationPolicy />
                      <ImportantContacts />
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          {/**Printable ticket */}
          <Box
            display="none"
            displayPrint="block"
            mb={8}
            style={{ marginTop: "-20px" }}
          >
            <Grid container>
              <Grid item xs={4} className={classes.centered}>
                <Typography variant="subtitle2">
                  {ticket.fromCity} - {ticket.toCity}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <img src={logo} alt="logo"></img>
              </Grid>
              <Grid item xs={4} className={classes.spaceBetween}>
                <Typography variant="subtitle2">
                  {ticket.journeyDate}
                </Typography>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Typography variant="subtitle2">{ticket.pnrNumber}</Typography>
              </Grid>
              <Grid item xs={3} className={classes.centered}>
                <div>
                  <Typography variant="subtitle2">
                    {ticket.reportingTime}
                  </Typography>
                  <Typography variant="caption">Reporting Time</Typography>
                </div>
              </Grid>
              <Grid item xs={2} className={classes.centered}>
                <div>
                  <Typography variant="subtitle2">
                    {ticket.startTime}
                  </Typography>
                  <Typography variant="caption">Departure Time</Typography>
                </div>
              </Grid>
              <Grid item xs={3} className={classes.centered}>
                <div>
                  <Typography variant="subtitle2">
                    {(ticket.passengerList || []).length}
                  </Typography>
                  <Typography variant="caption">Number of seat</Typography>
                </div>
              </Grid>
              <Box mt={2}></Box>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Passenger Details : </Typography>
              </Grid>
              <Grid item xs={12}>
                <Table size="small">
                  {ticket.passengerList && ticket.passengerList.length ? (
                    <TableRow>
                      <TableCell>
                        <strong>{ticket.passengerList[0].passengerName}</strong>
                        <br />
                        {ticket.passengerList[0].gender}
                      </TableCell>
                      <TableCell>
                        <strong>{ticket.boardingPoint}</strong>
                        <br />
                        Boarding Point
                      </TableCell>
                      <TableCell>
                        <strong>
                          {ticket.passengerList
                            .map((passenger) => passenger.seatNumber)
                            .join(",")}
                        </strong>
                        <br />
                        Seat Number
                      </TableCell>
                    </TableRow>
                  ) : (
                    ""
                  )}
                </Table>
              </Grid>
              <Box mt={2}></Box>
              <Grid item xs={6}>
                Total Fare: <strong>&#8377; {ticket.totalFare}</strong>
                <br></br>
                (Inclusive of all taxes)
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">
                  <strong>PH : 8811079999, 7086093241</strong>
                  <br />
                  <strong>ISBT Guwahati : 7086018977</strong>
                  <br />
                  <strong>Barak Valley : 9854037111, 7086054040</strong>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default withStyles(Styles)(ETicket);
