import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#3DB2FF",
  },
  [theme.breakpoints.down("sm")]: {
    heading: {
      fontSize: "32px",
    },
    image: {
      height: "32px",
    },
    container: {
      flexDirection: "column-reverse",
    },
  },
  image: {
    marginLeft: "15px",
  },
}));
