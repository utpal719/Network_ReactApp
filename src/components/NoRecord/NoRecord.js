import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";
import { Styles } from "./Styles";
import { useHistory } from "react-router-dom";

const NoRecord = ({ classes }) => {
  let history = useHistory();

  let handleBack = _ => {
    history.goBack();
  };
  return (
    <div className={classes.noTicketContainer}>
      <div className={classes.flexed}>
        <div className={classes.marginAuto}>
          <div className={classes.textCenter}>
            <Typography variant="h1" color="textSecondary">
              Ooops!!!
            </Typography>
            <p>
              <Typography variant="h6">No data found.</Typography>
            </p>
            <p>
              <Typography variant="caption">
                Kindly ensure that you've entered the correct{" "}
                <span className={classes.textRed}>
                  <strong>PNR</strong>
                </span>
                .
              </Typography>
            </p>
            <p className={classes.textCenter}>
              <Button variant="contained" color="primary" onClick={handleBack}>
                Go back
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(Styles)(NoRecord);
