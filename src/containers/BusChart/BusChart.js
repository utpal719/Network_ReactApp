import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
// import "./style.css";
import { useDispatch } from "react-redux";
import Constants from "../../redux/actionConstants";
import { formatDate } from "../../utilities/Functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { busChart } from "./../../apis/buschart/index";

let validationSchema = Yup.object({
  busRoute: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date")
});

const BusChart = props => {
  console.log("inside bus chart");
  const [busRoute, setBusRoute] = useState([]);
  const { classes } = props;

  let formik = useFormik({
    initialValues: {
      fromCity: "",
      journeyDate: new Date()
    },
    validationSchema,
    onSubmit: function(values) {
      dispatch({
        type: Constants.SET_SEARCH,
        payload: {
          from: values.busRoute,
          date: formatDate(values.journeyDate)
        }
      });
    }
  });

  let dispatch = useDispatch();
  let handleSourceChange = (_, value) =>
    formik.setFieldValue("busRoute", value);
  let setSelectedDate = function(date) {
    formik.setFieldValue("journeyDate", date);
  };

  useEffect(() => {
    (async () => {
      let data = await busChart();
      console.log(data);
      setBusRoute(data); // newly added
    })();
    // setBusRoute(data); //NOTE : data is not available outside the context, the scope of the data variable is only limited to the IIFE above
    //    props.stopLoading(); //Since this component is wraped with the Preloader component, props.stopLoading() should be called to stop the loader, otherwise the loading spinner will never stop
    props.stopLoading();
  }, []);

  return (
    <div className={classes.bg}>
      <Grid
        container
        spacing={2}
        direction="column"
        className={classes.gridstyle}
        style={{ marginTop: 10 }}
      >
        <Grid item xs={12}>
          <h3>BUS CHART</h3>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <p>Select Bus</p>
                <Autocomplete
                  id="busRoute"
                  ListboxProps={{
                    name: "busRoute"
                  }}
                  options={busRoute}
                  getOptionLabel={option => option}
                  onChange={handleSourceChange}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder="Select bus route"
                      variant="outlined"
                      className={classes.inputbox}
                    />
                  )}
                />
                <br />
                <div class="error form-error">
                  {formik.errors.busRoute &&
                    formik.touched.busRoute &&
                    formik.errors.busRoute}
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} direction="row">
              <Grid item xs={6}>
                <p>Departing</p>
                <DatePicker
                  selected={formik.values.journeyDate}
                  name="journeyDate"
                  onChange={date => setSelectedDate(date)}
                  showMonthDropdown
                  dateFormat="MMM d, yyyy"
                  minDate={new Date()}
                  className={classes.inputdate}
                />
                <br />
                <div class="error form-error">{formik.errors.journeyDate}</div>
              </Grid>
            </Grid>
            <br />
            <Button type="submit" className={classes.button}>
              Search Buses
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(BusChart);
