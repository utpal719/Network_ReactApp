import React from "react";
import { Grid, withStyles, Typography, Button, Box } from "@material-ui/core";
import { Styles } from "../Styles";
import logo from "../logo1.png";

const ETicketHeader = ({ classes, ticket, handlePrint }) => {
  return (
    <>
      <Grid item xs={4}>
        <Typography variant="h6">E-Ticket</Typography>
        <Typography variant="caption" color="textPrimary">
          <strong>PNR :</strong> {ticket.pnrNumber}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src={logo} alt="logo"></img>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="caption">Total Fare:</Typography>
        &nbsp;&nbsp;
        <strong className={classes.totalFare}>&#8377;{ticket.totalFare}</strong>
        <Box displayPrint="none">
          <Button
            variant="contained"
            size="small"
            style={{ background: "#4caf50", color: "#eee" }}
            fullWidth
            onClick={handlePrint}
          >
            Print
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default withStyles(Styles)(ETicketHeader);
