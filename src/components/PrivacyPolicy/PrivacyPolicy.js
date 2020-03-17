import React from "react";
import { Typography, withStyles, Divider } from "@material-ui/core";
import { Styles } from "./Styles";
const PrivacyPolicy = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h4" align="center">
        Privacy Policy
      </Typography>
      <div className={classes.typo}></div>
      <br />
      <Typography variant="h7" display="block" align="center">
        networktravels.com respects your privacy and recognizes the need to
        protect the personally identifiable information (any information by
        which you can be identified, such as name, address, and telephone
        number) you share with us. We would like to assure you that we follow
        appropriate standards when it comes to protecting your privacy on our
        web sites. In general, you can visit networktravels.com website without
        telling us who you are or revealing any personal information about
        yourself. By accessing this Site, certain information about you, such as
        Internet protocol (IP) addresses, navigation through the Site, the
        systems and programs used and the time spent, along with other similar
        information, may be stored on our servers and we analyze this data for
        trends and statistics, but the individual user remains anonymous.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        If you provide unique identifying information, such as name, address and
        other information to us, such information may be used for statistical
        and/or other purposes. Any personally identifiable information you
        submit while booking with networktravels.com, will ONLY be disclosed to
        travel suppliers/operators who are linked to your bookings. We will not
        disclose, sell, share or in any way reveal your information to any other
        third party.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        Our privacy policy is subject to change at any time without notice. To
        make sure you are aware of any changes, please review this policy
        periodically. By visiting this Website you agree to be bound by the
        terms and conditions of this Privacy Policy. If you do not agree please
        do not use or access our Website.
      </Typography>
      <br />
      <Typography variant="h7" display="block" align="center">
        By using the Website and/or by providing your information, you consent
        to the collection and use of the information you disclose on the Website
        in accordance with this Privacy Policy, including but not limited to
        your consent for sharing your information as per this privacy policy. If
        we decide to change our privacy policy, we will post those changes on
        this page so that you are always aware of what information we collect,
        how we use it, and under what circumstances we disclose it.
      </Typography>
      <br />
    </div>
  );
};
export default withStyles(Styles)(PrivacyPolicy);
