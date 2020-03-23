import React, { useState, useEffect } from "react";
import { Grid, withStyles, Typography, Button } from "@material-ui/core";
import { useSelector, useStore } from "react-redux";
import { Styles } from "./Styles";
import { AccountCircle, PermContactCalendar } from "@material-ui/icons";
import PassengerInfo from "./PassengerInfo/PassengerInfo";
import ContactDetails from "./ContactDetails/ContactDetails";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { book } from "../../apis/bookings";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Required"),
  phone: Yup.string()
    .matches(/^([0]|\+91)?[789]\d{9}$/, "Please enter a valid phone number")
    .required(),
  passengers: Yup.array().of(
    Yup.object({
      passengerName: Yup.string().required("Please enter a name"),
      gender: Yup.string().required("Please provide your gender"),
      age: Yup.string().required("Please enter your age")
    })
  )
});
/**
 * @method Booking
 * @description - This Component handles the collection of passenger details and the contact details.
 * @param {Object} props - props passed down the component tree
 */
const Booking = ({ classes }) => {
  /**get selected seats and total fare */
  let { seats, fare, boardingPoint } = useSelector(state => state.bookingInfo);
  /**get selected bus details */
  let busDetails = useSelector(state => state.bus);
  /**get search details */
  let searchInfo = useSelector(state => state.search);

  let history = useHistory();
  let [defaultPassenger, setDefaultPassenger] = useState({
    passengerName: "",
    gender: "",
    age: ""
  });

  useEffect(() => {
    if (history.action === "POP") {
      history.push("/");
    }
  }, []);

  let passengerArr = [];
  for (let i = 0; i < seats.length; i++) {
    passengerArr.push({
      passengerName: "",
      gender: "",
      age: ""
    });
  }

  let formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      passengers: passengerArr
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: values => {
      let bookingDetails = {
        busId: busDetails.busId,
        midId: busDetails.midId || 0,
        journeyDate: searchInfo.date,
        mobile: values.phone,
        email: values.email,
        totalFare: fare,
        noOfSeats: seats.length,
        agentFare: "",
        toCity: searchInfo.to,
        fromCity: searchInfo.from,
        startTime: busDetails.startTime,
        endTime: busDetails.endTime,
        boardingPoint: boardingPoint,
        passengerList: values.passengers,
        selectedSeat: seats.join(",")
      };
      (async () => {
        let data = await book(bookingDetails);
        console.log(data);
      })();
    }
  });
  /**
   * Fill all passenger detail based on the input of the 1st passenger.
   * If other passenger fields are filled, ignore changes
   **/
  let prefiller = defaultPassenger => {
    setDefaultPassenger(defaultPassenger);
    for (let i = 1; i < seats.length; i++) {
      formik.setFieldValue(
        `passengers[${i}].passengerName`,
        defaultPassenger.passengerName
      );
      formik.setFieldValue(`passengers[${i}].gender`, defaultPassenger.gender);
      formik.setFieldValue(`passengers[${i}].age`, defaultPassenger.age);
    }
  };

  /**
   * @method handlePassenger
   * @description - Updates the state fof the passenger array
   * @param {Number} index - the index of the passenger in the passengers array currently modified
   * @param {Object} passengerInfo - an object containing the passengers info, namely `age`,`gender` and `name`
   */

  return (
    <div className={classes.gridstyle}>
      <form onSubmit={formik.handleSubmit}>
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
                      defaultPassenger={defaultPassenger}
                      prefiller={prefiller}
                      formik={formik}
                      //   handlePassenger={handlePassenger}
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
                <ContactDetails formik={formik} />
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
                    <Button type="submit" variant="contained" color="primary">
                      Proceed to checkout
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default withStyles(Styles)(Booking);
