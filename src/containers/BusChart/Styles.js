import image from "./../../images/n2.jpg";

export const Styles = () => ({
  gridstyle: {
    display: "flex",
    color: "white",
    paddingLeft: "40px",
    borderStyle: "rounded",
    background: "rgba(255,255,255,0.2)",
    marginTop: "88px",
    padding: "10px",
    paddingBottom: "20px",
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
    borderColor: "#edd31c",
    borderWidth: "1px"
  },
  bg: {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(${image})`,
    backgroundColor: "#eee"
    // padding: "140px"
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
  },
  table: {
    borderCollapse: "collapse"
  },
  tablehead: {
    backgroundColor: "#edd31c",
    color: "black"
  },
  tablerow: {
    "&:nth-of-type(odd)": {
      backgroundColor: "lightyellow"
    }
  },
  formContainer: {
    background: "#eee",
    padding: "20px",
    boxShadow:
      "inset 0 0 15px rgba(66, 66, 66, 0), inset 0 0 20px rgba(255, 255, 255, 0), 7px 7px 15px rgba(58, 58, 58, 0.15), -7px -7px 20px white, inset 0px 0px 4px rgba(255, 255, 255, 0.2)"
  }
});
