import React, { useState, useEffect } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import Constants from "../../redux/actionConstants";
import { formatDate } from "../../utilities/Functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { busChart } from "./../../apis/buschart/index";

let validationSchema = Yup.object({
  busId: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date")
});

const BusChart = props => {
  const [busRoute, setBusRoute] = useState([]);
  const { classes } = props;

  let formik = useFormik({
    initialValues: {
      busId: "",
      journeyDate: new Date()
    },
    validationSchema,
    onSubmit: function(values) {
      dispatch({
        type: Constants.SET_SEARCH,
        payload: {
          busId: values.busId,
          journeyDate: formatDate(values.journeyDate)
        }
      });
    }
  });

  let dispatch = useDispatch();

  let handleSourceChange = (_, value) => {
    formik.setFieldValue("busId", value.busId);
  };

  let setSelectedDate = function(date) {
    formik.setFieldValue("journeyDate", date);
  };

  let getLabels = option => {
    return option.fromCity + "-" + option.toCity + " : " + option.startTime;
  };

  useEffect(() => {
    (async () => {
      let data = await busChart();
      setBusRoute(data);
      props.stopLoading();
    })();
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
                  id="busId"
                  ListboxProps={{
                    name: "busId"
                  }}
                  options={busRoute}
                  getOptionLabel={option => getLabels(option)}
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
                  className={classes.inputdate}
                />
                <br />
                <div class="error form-error">{formik.errors.journeyDate}</div>
              </Grid>
            </Grid>
            <br />
            <Button type="submit" className={classes.button}>
              View Tickets
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(BusChart);
