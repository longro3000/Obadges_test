import { container, primaryColor, textColor } from "../../material-kit-react.jsx";

const footerStyle = {
  gridItem:{
      padding: "0 0",
      color: textColor
  },
  button:{
      padding:"0",
      marginRight: "10px"
  },
  a:{
    "&,&:hover,&:focus": {
      color: textColor,
      backgroundColor:"#FFFFFF"
    }
  },
  block: {
      textAlign: "left!important"
  },
  leftCorner: {
    paddingRight: "33%",
  },
  rightCorner: {
    padding:"0 10px",
  },
  footer:{
    backgroundColor: "#fff",
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  title: {
    textTransform: "uppercase",
    color: "#8A8C8F",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
