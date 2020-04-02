import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Paper } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Styles } from "./Styles";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../../utilities/Functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { busChart } from "./../../apis/buschart/index";
import { getAllPassengersByBus } from "./../../apis/tickets/index";
import PassengerTable from "./PassengerTable";

let validationSchema = Yup.object({
  busId: Yup.string().required("Please select a city"),
  journeyDate: Yup.date().required("Please select a date")
});

const BusChart = props => {
  const [busRoute, setBusRoute] = useState([]);
  const [passengerList, setPassengerList] = useState();
  const [showTable, setShowTable] = useState(false);
  const { classes } = props;

  let formik = useFormik({
    initialValues: {
      busId: "",
      journeyDate: new Date()
    },
    validationSchema,
    onSubmit: function(values) {
      const payload = {
        busId: values.busId,
        journeyDate: formatDate(values.journeyDate)
      };
      console.log("inside submit");
      (async () => {
        let data = await getAllPassengersByBus(payload);
        setPassengerList(data);
        setShowTable(true);
        props.stopLoading();
      })();
    }
  });

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
        spacing={4}
        direction="row"
        className={classes.gridstyle}
        style={{ marginTop: 90 }}
        justify="center"
      >
        <Grid item xs={10}>
          <Paper elevation={2} className={classes.formContainer}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={4}>
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
                    onChange={date => setSelectedDate(date)}
                    showMonthDropdown
                    dateFormat="MMM d, yyyy"
                    popperPlacement="bottom-start"
                    popperModifiers={{
                      flip: {
                        enabled: false
                      },
                      preventOverflow: {
                        enabled: true,
                        escapeWithReference: false
                      }
                    }}
                    className={classes.inputdate}
                  />
                  <br />
                  <div class="error form-error">
                    {formik.errors.journeyDate}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" className={classes.button}>
                    View Tickets
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          {showTable ? <PassengerTable list={passengerList} /> : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(BusChart);
