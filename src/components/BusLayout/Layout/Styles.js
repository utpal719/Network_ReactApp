import layout from "./busLayout.png";

export const Styles = () => ({
  busLayoutContainer: {
    listStyle: "none",
    padding: "15px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "2px 2px 8px aliceblue",
    textAlign: "center",
    fontSize: "small"
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
    color: "#000",
    cursor: "pointer"
  },
  occupiedSeat: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "0 -40px",
    color: "#fff",
    fontWeight: "600",
    display: "inline-block",
    cursor: "no-drop"
  },
  selectedSeat: {
    width: "20px",
    height: "20px",
    backgroundImage: `url(${layout})`,
    backgroundPosition: "0 -60px",
    display: "inline-block",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer"
  },
  pavement: {
    width: "20px",
    height: "20px",
    display: "block"
  },
  blank: {
    display: "inline-block"
  },
  sleeperUnoccupied: {
    height: "20px",
    width: "40px",
    display: "block",
    backgroundImage: `url(${layout})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-40px 0px",
    cursor: "pointer"
  },
  sleeperSelected: {
    height: "20px",
    width: "40px",
    display: "block",
    backgroundImage: `url(${layout})`,
    backgroundRepeat: "no-repeat",
    color: "#fff",
    fontWeight: "600",
    backgroundPosition: "-40px -60px",
    cursor: "pointer"
  },
  sleeperOccupied: {
    height: "20px",
    width: "40px",
    display: "block",
    backgroundImage: `url(${layout})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-40px -60px",
    color: "#fff",
    fontWeight: "600",
    cursor: "no-drop"
  }
});
