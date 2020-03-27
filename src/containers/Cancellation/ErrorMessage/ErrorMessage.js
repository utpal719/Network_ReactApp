import React from "react";
import { Grid, Typography } from "@material-ui/core";

const ErrorMessage = error => {
  error = error.split(":");
  let errorMessage = error[1];
  if (error[0] !== "java.util.NoSuchElementException") {
    return (
      <p>
        <Typography varaint="h6">{errorMessage}</Typography>
      </p>
    );
  } else {
    return (
      <>
        <p>
          <Typography variant="h6">No data found.</Typography>
        </p>
        <p>
          <Typography variant="caption">
            Kindly ensure that you've entered the correct{" "}
            <span>
              <strong>PNR</strong>
            </span>
            .
          </Typography>
        </p>
      </>
    );
  }
};

export default ErrorMessage;
