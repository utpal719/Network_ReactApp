import React, { useState, useEffect } from "react";
import { Grid, withStyles, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Styles } from "./Styles";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { AccountCircle, PermContactCalendar } from "@material-ui/icons";
import PassengerInfo from "./PassengerInfo/PassengerInfo";
import ContactDetails from "./ContactDetails/ContactDetails";
import { useHistory } from "react-router-dom";

/**
 * @method Booking
 * @description - This Component handles the collection of passenger details and the contact details.
 * @param {Object} props - props passed down the component tree
 */
const Booking = ({ classes }) => {
  let { seats, fare } = useSelector(state => state.bookingInfo);
  //   seats = [1, 2, 5];
  let history = useHistory();
  let [passengers, setPassengers] = useState([]);
  let [prefilledName, setPrefilledName] = useState("");
  let [prefilledGender, setPrefilledGender] = useState("");
  let [prefilledAge, setPrefilledAge] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  useEffect(() => {
    if (history.action === "POP") {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    let passengerAcc = generatePassengerArray(
      passengers,
      seats,
      "name",
      prefilledName
    );
    setPassengers(passengerAcc);
  }, [prefilledName]);

  useEffect(() => {
    let passengerAcc = generatePassengerArray(
      passengers,
      seats,
      "age",
      prefilledAge
    );
    setPassengers(passengerAcc);
  }, [prefilledAge]);

  useEffect(() => {
    let passengerAcc = generatePassengerArray(
      passengers,
      seats,
      "gender",
      prefilledGender
    );
    setPassengers(passengerAcc);
  }, [prefilledGender]);

  /**
   * Fill all passenger detail based on the input of the 1st passenger.
   * If other passenger fields are filled, ignore changes
   **/
  let prefiller = ({ prefilledName, prefilledGender, prefilledAge }) => {
    setPrefilledName(prefilledName);
    setPrefilledAge(prefilledAge);
    setPrefilledGender(prefilledGender);
  };

  /**
   * @method handlePassenger
   * @description - Updates the state fof the passenger array
   * @param {Number} index - the index of the passenger in the passengers array currently modified
   * @param {Object} passengerInfo - an object containing the passengers info, namely `age`,`gender` and `name`
   */
  let handlePassenger = (index, passengerInfo) => {
    if (index !== 0) {
      passengers.splice(index, 1, passengerInfo);
      setPassengers(passengers);
    }
  };

  let checkout = () => console.log(passengers, email, phone);

  return (
    <div className={classes.gridstyle}>
      <NavBar />
      <Grid container justify="center" className={classes.sectionPadded}>
        <Grid item xs={12} md={10}>
          <Grid container direction="row" justify="center">
            <Grid item xs={11} md={10}>
              <Typography variant="h5" style={{ display: "flex" }}>
                <AccountCircle fontSize="large" color="secondary" />
                &nbsp;Passenger Information
              </Typography>
              {/* <Grid container spacing={2}> */}
              {seats.map((seat, index) => {
                return (
                  <PassengerInfo
                    key={index}
                    index={index}
                    seat={seat}
                    prefilledName={prefilledName}
                    prefilledGender={prefilledGender}
                    prefilledAge={prefilledAge}
                    prefiller={prefiller}
                    handlePassenger={handlePassenger}
                  ></PassengerInfo>
                );
              })}
              {/* </Grid> */}
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h5" style={{ display: "flex" }}>
                <PermContactCalendar
                  fontSize="large"
                  style={{ color: "darkorange" }}
                />
                &nbsp;Contact Details
              </Typography>
              <ContactDetails
                setEmail={setEmail}
                setPhone={setPhone}
                email={email}
                phone={phone}
              />
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12} md={10}>
              <Grid container>
                <Grid item md={2} xs={4} className={classes.flexed}>
                  <Typography
                    variant="subtitle1"
                    className={classes.marginAuto}
                  >
                    Total fare : &#8377; {fare}
                  </Typography>
                </Grid>
                <Grid item md={6} xs={8}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={checkout}
                  >
                    Proceed to checkout
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

/**
 * @method generatePassengerArray
 * @description - The function generates a prefilled array of passenger objects when a user fills the 1st passenger details
 * @param {Array} passengers - an array of passenger objects containing name,age and gender
 * @param {*} seats - total seats booked
 * @param {*} fieldName - filedname of the passenger object to update
 * @param {*} fieldValue - the value of the field to update
 */
function generatePassengerArray(passengers, seats, fieldName, fieldValue) {
  let passengerAcc = [...passengers];
  for (let i = 0; i < seats.length; i++) {
    let passenger = passengerAcc[i];
    passengerAcc[i] = {
      ...passenger,
      [fieldName]: fieldValue
    };
  }
  return passengerAcc;
}

export default withStyles(Styles)(Booking);
