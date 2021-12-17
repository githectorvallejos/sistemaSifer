import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    // backgroundColor: "#2E2E2E",
    backgroundColor:theme.palette.primary.main,
    flexShrink: 0,
  },
  footerComponent: {
    padding: "0.5rem",
  },
}));
