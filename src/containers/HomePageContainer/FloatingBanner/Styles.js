export const Styles = () => ({
  bg: {
    minHeight: 200,
    display: "flex",
    background: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "grey",
    fontFamily: "Roboto, arial, helvetica, sans-serif",
    spacing: "2px",
    padding: "50px"
  },
  gitem: {
    textAlign: "center",
    lineHeight: "30px"
  },
  textCenter: {
    textAlign: "center",
    lineHeight: "30px",
    fontWeight: "bold",
    "& img": {
      width: "70px"
    }
  }
});
