import React from "react";
import {
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
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
      return (
        <Card style={{ color:"#CE1126",
        boxAlign:"center",
        alignContent:"center",
        width:"100%",
        padding:"50px"}}>
          <CardContent>
          <Typography variant="h3" >ERROR</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" >Something Went Wrong..Please, Try Again.</Typography>
          </CardContent>
        </Card>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
