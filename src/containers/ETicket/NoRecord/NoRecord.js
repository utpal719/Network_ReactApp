import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { Styles } from "../Styles";

const NoRecord = ({ classes }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(Styles)(NoRecord);
