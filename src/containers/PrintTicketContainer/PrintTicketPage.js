import React from "react";
import PrintTicketForm from "./PrintTicketForm";
import { withStyles } from "@material-ui/core/styles";
import { Styles } from "./Styles";
import Preloader from "../../components/Preloader/Preloader";
const PrintTicketPage = (props) => {
  return (
    <div>
      <Preloader defaultLoading={false} Component={PrintTicketForm} />
    </div>
  );
};

export default withStyles(Styles)(PrintTicketPage);
