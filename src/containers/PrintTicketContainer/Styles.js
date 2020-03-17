import image from "./networkbg.jpg";
export const Styles = () => ({
  container: {
    justifyContent: "center"
  },
  bg: {
    backgroundImage: `url(${image})`
  },
  gridstyle: {
    display: "flex",
    width: "100%",
    height: "100vh",
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
    backgroundColor: "#D9534F",
    borderRadius: "0",
    borderStyle: "square",
    width: "100%"
  },
  textfield: {
    width: "100%",
    backgroundColor: "rgba(241,243,242,1)",
    border: "none"
  },
  formstyle: {
    padding: "10px"
  }
});
