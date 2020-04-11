import image from "./networkbg.jpg";
export const Styles = () => ({
  container: {
    justifyContent: "center"
  },
  gridstyle: {
    display: "flex",
    width: "100%",
    height: "80vh",
    borderRadius: "0",
    borderStyle: "square",
    marginTop: "88px",
    border: "3px",
    borderColor: "black"
  },
  paper: {
    width: "100%",
    margin: "auto",
    padding: "30px",
    elevation: 4
  },
  button: {
    borderRadius: "0",
    borderStyle: "square",
    width: "100%",
    backgroundColor: "#edd31c",
    "&:hover": {
      backgroundColor: "#edd31c"
    }
  },
  textfield: {
    width: "100%",
    backgroundColor: "rgba(241,243,242,1)",
    border: "none"
  },
  formstyle: {
    padding: "10px"
  },
  textCenter: {
    textAlign: "center"
  }
});
