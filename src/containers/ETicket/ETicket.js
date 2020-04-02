import React, { useEffect, useState } from "react";
import { Grid, withStyles, Paper, Box } from "@material-ui/core";
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

const ETicket = props => {
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

  let handlePrint = _ => window.print();
  return (
    <>
      <Box displayPrint="none">
        <div className={classes.gridstyle} />
      </Box>
      {error ? (
        <NoRecord />
      ) : (
        <>
          <Box displayPrint="block">
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
                      totalFare: ticket.totalFare
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
                            journeyDate: ticket.journeyDate
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
        </>
      )}
    </>
  );
};

export default withStyles(Styles)(ETicket);
