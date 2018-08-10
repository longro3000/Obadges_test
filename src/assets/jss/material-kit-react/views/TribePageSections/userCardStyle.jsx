import { cardTitle, title } from "../../../material-kit-react.jsx";
import imagesStyle from "../../imagesStyles.jsx";

const userCardStyle = {
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
    maxWidth: "274px",
    maxHeight:"274px"
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

export default userCardStyle;
