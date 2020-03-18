import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Styles } from "./Styles";
const EmailCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography>Email:</Typography>
        <Typography>networktoursindia@gmail.com</Typography>
        <Typography>networktravelsindia@gmail.com</Typography>
      </CardContent>
    </Card>
  );
};
export default withStyles(Styles)(EmailCard);
