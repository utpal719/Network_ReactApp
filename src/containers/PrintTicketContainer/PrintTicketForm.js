import React from "react";
import {
  TextField,
  InputLabel,
  Button,
  withStyles,
  Grid,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { Styles } from "./Styles";

const PrintTicketForm = props => {
  const [value, setValue] = React.useState("view");

  const handleChange = event => {
    setValue(event.target.value);
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item xs={4} className={classes.gridstyle}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.formstyle}>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  type="text"
                  label="PNR Number"
                  variant="outlined"
                  className={classes.textfield}
                  required
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <RadioGroup
                  aria-label="tickettype"
                  name="tickettype"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="view"
                    control={<Radio />}
                    label="View ticket"
                  />
                  <FormControlLabel
                    value="sms"
                    control={<Radio />}
                    label="Get Ticket by Email"
                  />
                  <FormControlLabel
                    value="mail"
                    control={<Radio />}
                    label=" Get mTicket by SMS"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <Button type="Submit" label="Go" className={classes.button}>
                  Go!!
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withStyles(Styles)(PrintTicketForm);
