import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
const CancellationPolicy = () => {
  return (
    <div>
      <Typography variant="h5" align="center">
        Cancellation Policy
      </Typography>
      <br />
      <Typography variant="h7" display="block">
        1) Before 3 (three) hours from the reporting time- No charges.
      </Typography>
      <br />
      <Typography variant="h7" display="block">
        2) Other cases- No refund.
      </Typography>
      <br />
      <Typography variant="h7" display="block">
        3) Company is not responsible for luggage lost or damaged.
      </Typography>
      <br />
      <Typography variant="h7" display="block">
        4) Luggage over 20 kg are not allowed.
      </Typography>
      <br />
      <Typography variant="h7" display="block">
        5) In the event of cancellation of journey due to technical defect, the
        passengers will get back their bus fare.
      </Typography>
    </div>
  );
};
export default withStyles(Styles)(CancellationPolicy);
