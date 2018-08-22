import { container } from "../../../material-kit-react.jsx";

const tribePageStyle = theme => ({
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  gridIcon:{
      width: "auto",
      margin: "0 auto"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    margin:"10% auto",
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  backgroundcontainer: {
    padding: "230px 290px 200px 290px"
  }
});

export default tribePageStyle;
