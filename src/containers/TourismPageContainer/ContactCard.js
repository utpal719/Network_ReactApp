import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
const ContactCard = (props) => {
  const {classes}=props
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>Call us at 9435154638, 9434506446</Typography>
        <Typography>
          or send us an email to NetworkTravelsIndia@gmail.com
        </Typography>
        <Typography>
          17 Paltan Bazar, G S Road, Guwahati 781 008, Assam, India
        </Typography>
      </CardContent>
    </Card>
  );
};
export default withStyles(Styles)(ContactCard);
