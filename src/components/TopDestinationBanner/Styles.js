export const Styles = () => ({
  bg: {
    // minHeight: 200,
    width: "100%",
    display: "flex",
    background: "white",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    fontFamily: "Roboto, arial, helvetica, sans-serif",
    spacing: "2px",
    padding: "0px 100px 50px 100px"
  },
  gitem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "8px"
  },
  header: {
    textAlign: "center",
    marginBottom: "20px"
  },
  imageStyle: {
    width: "100%",
    transition: "3s all ease-in-out",
    borderRadius: "8px",
    "&:hover": {
      transform: "scale(1.8)",
      opacity: "0.5"
    }
  },
  section: {
    padding: "50px 0px"
  },
  imgHolder: {
    overflow: "hidden",
    borderRadius: "8px"
  }
});
