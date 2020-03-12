import layout from "./busLayout.png";

export const Styles = () => ({
  busLayoutContainer: {
    listStyle: "none",
    padding: "20px 5px",
    background: "aliceblue",
    borderRadius: "5px",
    boxShadow: "2px 2px 8px aliceblue"
  },
  steeringContainer: {
    display: "inline-block",
    position: "relative",
    marginRight: "20px",
    top: "5px",
    height: "100%"
  },
  steering: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "-24px -106px",
    display: "block"
  },
  seatRows: { display: "inline-block", margin: "0px 5px" },
  unoccupiedSeat: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "0px 0px",
    display: "inline-block",
    color: "#000"
  },
  occupiedSeat: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "0 -40px",
    display: "inline-block",
    color: "#000"
  },
  selectedSeat: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "0 -60px",
    display: "inline-block",
    color: "#000"
  },
  pavement: {
    width: "20px",
    height: "20px",
    display: "block"
  }
});
