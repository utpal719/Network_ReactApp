import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
const ContactCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>
          Network Travels: 8811079999, 7086093241, 7086018977(ISBT)
        </Typography>
        <Typography>Network Courier: 9435019337</Typography>
        <Typography>Network Cargo: 8011667971</Typography>
        <Typography>Network Tourism: 9435154638, 9434506446</Typography>
        <Typography>Ph/Fax: 0361 - 2605335</Typography>
      </CardContent>
    </Card>
  );
};
export default withStyles(Styles)(ContactCard);
