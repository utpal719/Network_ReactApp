import image from "./../../../images/interior.jpg";

export const Styles = () => ({
  bg: {
    background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${image})`,
    paddingBottom: "50px",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  },
  gridStyles: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  imageStyle: {
    width: "30%"
  },
  inner: {
    textAlign: "center",
    color: "white",
    fontWeight: "400",
    fontSize: "14",
    lineHeight: "20px"
  },
  infoGraph: {
    width: "50px"
  }
});
