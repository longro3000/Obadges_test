import { cardTitle, title } from "../../../material-kit-react.jsx";
import imagesStyle from "../../imagesStyles.jsx";

const badgeCardStyle = {
  cardGrid:{
      position: "relative",
      width: "100%",
      minHeight: "1px",
      paddingTop: "20px",
      paddingRight: "25px",
      paddingLeft: "25px",
      flexBasis: "auto",
      maxWidth: "280px",
      maxHeight:"500px"
  },
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  imageGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "0px",
    paddingRight: "0px",
    Width: "260px",
    Height:"260px"
  },
    tagGrid:{
      marginTop:"10px",
      marginBottom: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "auto",
      textAlign: "left"
    },
  cardTitle,
  smallTitle: {
    color: "#8A8C8F"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
};

export default badgeCardStyle;
