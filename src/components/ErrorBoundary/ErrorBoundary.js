import React from "react";
import { Card, CardHeader, CardContent, withStyles } from "@material-ui/core";
import { Styles } from "./Styles";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return(
      <Card >
        <CardHeader>ERROR.</CardHeader>
        <CardContent>Something Went Wrong..Please, Try Again.</CardContent>
      </Card>
      );
    }
    return this.props.children;
  }
}
export default withStyles(Styles)(ErrorBoundary)