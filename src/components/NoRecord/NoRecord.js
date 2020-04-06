import React from "react";
import { withStyles, Typography, Button } from "@material-ui/core";
import { Styles } from "./Styles";
import { useHistory } from "react-router-dom";

const NoRecord = ({ classes, render }) => {
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
            {render}
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
