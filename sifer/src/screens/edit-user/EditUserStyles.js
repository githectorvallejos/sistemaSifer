import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    backgroundColor: "#2E2E2E",
  },
  root: {
    backgroundColor: "#ffffff",
    borderRadius: "1rem",
    marginTop: "3rem",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, .2)",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer +1,
    color: '#fff',
  },
}));
