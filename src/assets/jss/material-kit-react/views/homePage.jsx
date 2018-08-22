import { container } from "../../material-kit-react.jsx";

const homePageStyle = theme => ({
  container,
  newBadge:{
      margin:"10% auto"
  },
  gridSlider:{
      marginTop:"10%",
      marginBottom:"15%"
  },
  gridIcon:{
      width: "auto",
      margin: "0 auto"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
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
  tribeMain: {
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  badgeMain: {
    backgroundColor: "transparent",
    position: "relative",
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  backgroundcontainer: {
    padding: "230px 290px 200px 290px"
  },
  icon:{
      margin:"auto"
  }
});

export default homePageStyle;
