import React from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Styles } from "./Styles";
const AboutUs = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        About Our Company
      </Typography>
      <div className={classes.typo}></div>
      <br />
      <Typography variant="h5" display="block" align="center">
        The idea behind starting Network Travels was to allow bus travelers from
        North-East India to book bus tickets from the convenience of their homes
        and offices.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        Network Travels is the largest private bus fleet operator in Assam and
        North East India. Established in 1992, Network Travels started in-bound
        operations in 1993 and has been successfully handling the tours and
        travels in North East India. The first Government-recognized tour
        operator in North East India, the company was incorporated to provide
        connectivity by road to important destinations within the region and is
        currently the largest operator in this segment.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        Network Travels International, accredited with IATA, deals with both
        domestic and international air ticketing. The tourism division of the
        company facilitates tourists to travel to all major destinations of
        North East India, including Sikkim and Darjeeling.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        Network Travels consists of a current fleet of 142 buses with 81 own
        buses and 61 in joint operations. The fleet consist of both non-AC and
        AC seater coaches. It also has a fleet of around 15 Eicher mini buses
        which are used in transit services carrying passengers from Guwahati
        city to ISBT (Inter State Bus Terminus) for departure.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        As the biggest fleet operator in the North-East, Network Buses cover the
        roughest terrains and the remote corners in the region.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        With a workforce of about 510 in total, 132 schedules per day,
        approximately 3300 passengers daily and distance covered around 33000
        km, Network Travels is definitately the largest bus travel company in
        the entire North-East India.
      </Typography>
    </div>
  );
};
export default withStyles(Styles)(AboutUs);
