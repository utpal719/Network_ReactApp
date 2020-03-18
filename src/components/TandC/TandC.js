import React from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Styles } from "./Styles";
const TandC = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        Terms and Conditions
      </Typography>
      <div className={classes.typo}></div>
      <br />
      <Typography variant="h6" display="block" align="center">
        General terms :
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        1) networktravels.com (NETWORK TRAVELS) is the largest private bus fleet
        operator in Assam and North East India which allows its customers to
        have the flexibility of booking tickets offline (from counters) as well
        as online from their homes and offices by providing them with the choice
        of buses with departure times and prices.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        2)The arrival and departure times mentioned on the ticket are only
        tentative timings. Buses may be delayed due to some unavoidable reasons
        like traffic jams etc. However, the bus will not leave the source before
        the time that is mentioned on the ticket. Passengers are advised to call
        the contact number mentioned contact us tab in both the website and app
        and reconfirm the boarding point location and departure time on the day
        of journey.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        3) Any complaints/grievances should be reported in a week's time from
        date of journey performed.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        4) If ticket confirmation/cancellation, SMS/Email, is not sent for any
        reason, if reported it can be resent by our support team. SMS/Email
        might fail to deliver or get delayed for several reasons which are not
        in Network Travel's control.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        5) Objectionable articles are not allowed to be carried in the bus.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        6) Travelers under the influence of alcohol/drugs are not allowed in the
        bus.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        7) Travelers are requested to maintain decorum.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        8) Bookings and cancellations over phone are not allowed.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        9)The terms and conditions of our services can be amended, modified or
        withdrawn by networktravels.com at any time without notice.
      </Typography>
      <br />
      <Typography variant="h6" display="block" align="center">
        Failure Transaction :
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        1) A transaction might fail for several reasons and your account/card
        might be debited without generating a ticket. If the amount is deducted
        from your account/card, we request you to call our customer care number
        to re-confirm the failed transaction before proceeding with a fresh
        transaction/booking.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        2) Transactions such as these are refunded back to customer. Please read
        the refund policy below.
      </Typography>
      <br />
    </div>
  );
};
export default withStyles(Styles)(TandC);
