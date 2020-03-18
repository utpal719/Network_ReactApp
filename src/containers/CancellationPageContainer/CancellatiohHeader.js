import React from "react";
import { Typography, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
const CancellationHeader = () => {
  return (
    <div>
      <Typography variant="h5" align="center" display="block">
        Ticket Cancellation and Refund
      </Typography>
      <Typography variant="h6" align="center" display="block">
        Enjoy nuisance-free ticket cancellation. Stay updated with the
      </Typography>
      <Typography variant="h6" align="center" display="block">
        refund process. So, what are you waiting for!
      </Typography>
    </div>
  );
};
export default withStyles(Styles)(CancellationHeader);
