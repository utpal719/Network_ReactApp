import React from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Styles } from "./Styles";
const RefundPolicy = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        Refund Policy
      </Typography>
      <div className={classes.typo}></div>
      <br />
      <Typography variant="h7" display="block" align="center">
        1) Refunds processed for cancelled tickets are transferred to the
        passenger's bank account / debit / credit / net banking that were used
        while booking the tickets.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        2) Full amount will be refunded to the passenger if cancellation is done
        3 hours before Bus Origin Start Time, otherwise no amount will be
        awarded.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        3) All Refunds are processed automatically upon cancellation of tickets.
        Your bank may take 15-20 days to credit this amount to your
        account/card.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        4) In case the refund amount is not credited to your account in 20 days
        from the date of refund, we kindly request you to send an email to
        support@networktravels.com along with the ticket details/order details.
        We will provide you the necessary support in crediting back the refund
        amount.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        5) No refund will be processed for Passenger who do not report at the
        boarding point on time.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        6) In the event of cancellation of a bus, network travels will assist
        the passenger in providing an alternative bus, subject to availability.
        In case an alternative is not available, then network travels shall be
        liable to the passenger only to the extent of refunding the sum paid by
        the passenger for the price of the ticket.
      </Typography>
      <br />
    </div>
  );
};
export default withStyles(Styles)(RefundPolicy);
