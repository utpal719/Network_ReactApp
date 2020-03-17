import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import {Styles} from "./Styles"
const LocationCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>Network Travels</Typography>
        <Typography>Mr P. Dutta</Typography>
        <Typography>17 - Paltan Bazar, G.S. Road,</Typography>
        <Typography>Guwahati - 781008 Assam,India</Typography>
        <Typography>support@networktravels.com, 91-8403077666</Typography>
      </CardContent>
    </Card>
  );
};
export default withStyles(Styles)(LocationCard);
