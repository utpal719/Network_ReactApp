import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  Snackbar,
} from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../../utilities/Functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { busChart } from "./../../apis/buschart/index";
import { getAllPassengersByBus, sendBusNo } from "./../../apis/tickets/index";
import PassengerTable from "./PassengerTable";
import { Print } from "@material-ui/icons";
import { formatAMPM } from "../../utilities/Functions";
import Alert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";
import logo from "../../images/logo.jpg";

let validationSchema = Yup.object({
  busId: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date"),
});

const BusChart = (props) => {
  const [busRoute, setBusRoute] = useState([]);
  const [selectedRoute, setSelectedBusRoute] = useState("");
  const [passengerList, setPassengerList] = useState([]);
  const [seatCapacity, setSeatCapacity] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [canSendBusNo, setCanSend] = useState(false);

  const [busNo, setBusNo] = useState("");
  let [status, setStatus] = useState({
    show: false,
    severity: "",
    message: "",
  });

  /**if user is logged in and user has id 124 */
  let { loggedIn, userId } = useSelector((state) => state.user);
  const { classes } = props;

  let formik = useFormik({
    initialValues: {
      busId: "",
      journeyDate: new Date(),
    },
    validationSchema,
    onSubmit: function(values) {
      const payload = {
        busId: values.busId,
        journeyDate: formatDate(values.journeyDate),
      };
      props.startLoading();
      (async () => {
        let data = await getAllPassengersByBus(payload);
        if (data.length) {
          setCanSend(true);
        } else {
          setCanSend(false);
        }
        data = generateTableData(data);
        setPassengerList(data);
        setShowTable(true);
        props.stopLoading();
      })();
    },
  });

  let handleSourceChange = (_, value) => {
    if (value) {
      formik.setFieldValue("busId", value.busId);
      setSelectedBusRoute(
        value.fromCity +
          "-" +
          value.toCity +
          " : " +
          formatAMPM(value.startTime)
      );
      setSeatCapacity(value.seatCapacity);
    }
  };

  let setSelectedDate = function(date) {
    formik.setFieldValue("journeyDate", date);
  };

  let getLabels = (option) => {
    return (
      option.fromCity +
      "-" +
      option.toCity +
      " : " +
      formatAMPM(option.startTime)
    );
  };

  let generateTableData = function(data) {
    let tableData = [];
    let seatsOccupied = [];
    let blankFieldDummy = {
      passengerList: [{ passengerName: "", seatNumber: "" }],
      boardingPoint: "",
      mobile: "",
      pnrNumber: "",
      toCity: "",
      userName: "",
    };
    for (let i = 0; i < data.length; i++) {
      let eachBooking = data[i];
      let passengerList = [...eachBooking.passengerList];
      for (let j = 0; j < passengerList.length; j++) {
        let passengerDetails = passengerList[j];
        seatsOccupied.push(passengerDetails.seatNumber);
        tableData.push({ ...eachBooking, passengerList: [passengerDetails] });
      }
    }
    /**Fill the list with blank data */
    let availabeSeat = seatCapacity === 351 ? 35 : seatCapacity;
    for (let i = 1; i <= availabeSeat; i++) {
      if (!seatsOccupied.includes(i)) {
        tableData.push({
          ...blankFieldDummy,
          passengerList: [{ ...blankFieldDummy[0], seatNumber: i }],
        });
      }
    }
    // for (let i = 0; i < data.length; i++) {
    //   let eachBooking = data[i];
    //   let passengerList = [...eachBooking.passengerList];
    //   for (let j = 0; j < passengerList.length; j++) {
    //     let passengerDetails = passengerList[j];
    //     tableData.push({ ...eachBooking, passengerList: [passengerDetails] });
    //   }
    // }
    tableData = tableData.sort(
      (a, b) => a.passengerList[0].seatNumber - b.passengerList[0].seatNumber
    );
    return tableData;
  };

  useEffect(() => {
    (async () => {
      let data = await busChart();
      setBusRoute(data);
      props.stopLoading();
    })();
  }, []);

  let handleBusSend = () => {
    if (!canSendBusNo) {
      setStatus({
        show: true,
        severity: "error",
        message: !busNo ? "Enter a bus no" : "Select a route",
      });
    } else {
      sendBusNo({
        busId: formik.values.busId,
        journeyDate: formik.values.journeyDate,
        busNumber: busNo,
      }).then((data) => {});
    }
  };

  let onClose = () =>
    setStatus({
      show: false,
      severity: "",
      message: "",
    });

  return (
    <div id="busChart" className={classes.bg}>
      <Snackbar
        open={status.show}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={onClose}
          severity={status.severity}
        >
          {status.message}
        </Alert>
      </Snackbar>
      <Grid
        container
        spacing={4}
        direction="row"
        className={classes.gridstyle}
        justify="center"
      >
        <Grid item xs={12}>
          <Box
            display="none"
            displayPrint="block"
            className={classes.textCenter}
          >
            <img src={logo} alt="logo"></img>
          </Box>
        </Grid>
        <Grid item xs={10} className="pull">
          <Box display="none" displayPrint="block">
            <Typography varaint="h6" color="primary">
              {selectedRoute} | Journey Date :{" "}
              {formik.values.journeyDate
                ? formik.values.journeyDate.toDateString()
                : ""}
            </Typography>
          </Box>

          <Box displayPrint="none" className={classes.marginTop88}>
            <Paper elevation={2} className={classes.formContainer}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} direction="row">
                  <Grid item xs={12}></Grid>
                  <Grid item xs={4}>
                    <p>Select Bus</p>
                    <Autocomplete
                      id="busId"
                      ListboxProps={{
                        name: "busId",
                      }}
                      options={busRoute}
                      getOptionLabel={(option) => getLabels(option)}
                      onChange={handleSourceChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select bus route"
                          variant="outlined"
                          size="small"
                          className={classes.inputbox}
                        />
                      )}
                    />
                    <br />
                    <div class="error">
                      {formik.errors.busId &&
                        formik.touched.busId &&
                        formik.errors.busId}
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <p>Departing</p>
                    <DatePicker
                      selected={formik.values.journeyDate}
                      name="journeyDate"
                      onChange={(date) => setSelectedDate(date)}
                      showMonthDropdown
                      dateFormat="MMM d, yyyy"
                      popperPlacement="bottom-start"
                      popperModifiers={{
                        flip: {
                          enabled: false,
                        },
                        preventOverflow: {
                          enabled: true,
                          escapeWithReference: false,
                        },
                      }}
                      className={classes.inputdate}
                    />
                    <br />
                    <div class="error form-error">
                      {formik.errors.journeyDate}
                    </div>
                  </Grid>
                  {loggedIn && (userId === 124 || userId === "124") ? (
                    <Grid item xs={4} className={classes.centered}>
                      <p>Send Bus No.</p>
                      <TextField
                        label="Bus no."
                        variant="outlined"
                        size="small"
                        onChange={(e) => setBusNo(e.target.value)}
                        className={classes.busnofield}
                      />
                      <Button onClick={handleBusSend}>Send</Button>
                    </Grid>
                  ) : (
                    ""
                  )}
                  <Grid item xs={12}>
                    <Button type="submit" className={classes.button}>
                      View Tickets
                    </Button>
                    {passengerList.length ? (
                      <Box displayPrint="none" display="inline">
                        <Button type="button" onClick={() => window.print()}>
                          <Print fontSize="small"></Print>
                        </Button>
                      </Box>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={10} className="pull">
          {showTable ? (
            <PassengerTable list={passengerList} seatCapacity={seatCapacity} />
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(BusChart);
