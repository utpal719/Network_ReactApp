import React, { useEffect } from "react";
import { Grid, withStyles, Button } from "@material-ui/core";
import { Styles } from "./Styles";
import { getCancelTicketBooking, cancelTicket } from "../../apis/bookings";
import { useState } from "react";
import TimeCard from "../ETicket/TimeCard/TimeCard";
import PassengerDetailContainer from "../ETicket/PassengerDetailContainer/PassengerDetailContainer";
import { useHistory } from "react-router-dom";
import NoRecord from "../../components/NoRecord/NoRecord";
import Alert from "@material-ui/lab/Alert";

const Cancellation = props => {
  let { classes } = props;
  let history = useHistory();
  /**state contains the data passed from  the cancellation page using history state */
  let [pnrNumber, setPnrNumber] = useState("");
  let [mobile, setMobileNumber] = useState("");

  let [ticket, setTicket] = useState({});
  let [passengers, setPassengers] = useState([]);
  let [selectedPassengers, setSelectedPassengers] = useState([]);
  let [success, setSuccess] = useState(false);

  let [error, setError] = useState({
    error: false,
    message: "You must select a passenger"
  });

  useEffect(() => {
    let { pnrNumber, mobile } = history.location.state;
    setPnrNumber(pnrNumber);
    setMobileNumber(mobile);

    (async () => {
      let data = await getCancelTicketBooking({
        pnrNumber,
        mobile
      });

      if (data) {
        setPassengers(data.passengerList);
      }
      setTicket(data);
      props.stopLoading();
    })();
  }, []);

  let handleSelect = function(selected) {
    let totalSelected = selected.length;
    let passengerList = [];

    if (totalSelected) {
      for (let i = 0; i < totalSelected; i++) {
        passengerList.push(passengers[selected[i]]);
      }
      setSelectedPassengers([...passengerList]);
    } else {
      setSelectedPassengers([]);
    }
  };

  let handleSubmit = _ => {
    if (!selectedPassengers.length) {
      setError({ ...error, error: true });
    } else {
      setError({ ...error, error: false });
      let construct = {
        pnrNumber: pnrNumber,
        passengerList: selectedPassengers
      };
      (async () => {
        let data = await cancelTicket(construct);
        if (data) {
          setSuccess(true);
        }
      })();
    }
  };

  return (
    <>
      {!ticket ? (
        <NoRecord />
      ) : (
        <Grid
          container
          spacing={3}
          justify="center"
          className={classes.gridstyle}
        >
          <Grid item xs={8}>
            <Grid container spacing={3} className={classes.container}>
              {success && (
                <Grid item xs={12}>
                  <Alert>Your ticket has been cancelled</Alert>
                </Grid>
              )}
              <TimeCard ticket={ticket} />
              <PassengerDetailContainer
                ticket={ticket}
                selectable={true}
                handleSelect={handleSelect}
              />
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Cancel Ticket
                </Button>
                <div class="error">{error.error && error.message}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default withStyles(Styles)(Cancellation);
