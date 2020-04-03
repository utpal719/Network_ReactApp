import image from "./../../images/n2.jpg";

export const Styles = () => ({
  gridstyle: {
    display: "flex",
    width: "70%",
    height: "auto",
    color: "white",
    paddingLeft: "40px",
    borderStyle: "rounded",
    background: "rgba(255,255,255,0.2)",
    marginTop: "88px",
    padding: "10px",
    border: "3px",
    borderRadius: "15px",
    fontFamily: "'Open Sans', Tahoma, Arial, helvetica, sans-serif"
  },
  style: {
    color: "black"
  },
  inputbox: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    color: "grey",
    borderStyle: "rounded",
    borderRadius: "5px",
    borderColor: "grey",
    borderWidth: "1px"
  },
  inputdate: {
    backgroundColor: "white",
    width: "100%",
    height: "40px",
    color: "grey",
    borderStyle: "rounded",
    borderRadius: "5px",
    // borderColor: "#edd31c",
    paddingLeft: "6px",
    border: "none",
    borderWidth: "1px"
  },
  bg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)), url(${image})`,
    padding: "140px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  },
  button: {
    color: "black",
    backgroundColor: "#edd31c",
    "&:hover": {
      backgroundColor: "#edd31c"
    }
  },
  imgstyle: {
    width: "10%",
    height: "10%"
  }
});
