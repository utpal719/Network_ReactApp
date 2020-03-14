import layout from "./busLayout.png";

export const Styles = () => ({
  gridstyle: {
    marginTop: "88px"
  },
  bg: {
    backgroundImage: "none"
  },
  section: {
    margin: "20px 0px 50px 0px"
  },
  flexed: {
    display: "flex"
  },
  availableSeat: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "0px 0px",
    display: "block",
    color: "#000"
  },
  occupiedSeat: {
    backgroundPosition: "0 -40px",
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    display: "block",
    color: "#000"
  },
  selectedSeat: {
    backgroundPosition: "0 -60px",
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    display: "block",
    color: "#000"
  },
  seatPaperContainer: {
    padding: "20px 0px"
  }
});
