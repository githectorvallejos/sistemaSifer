import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    height: "2rem",
    backgroundColor: "#2E2E2E",
  },
  root: {
    backgroundColor: "#ffffff",

    borderRadius: "1rem",
    marginTop: "3rem",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, .2)",
  },
  tituloElegibles: {
    fontSize: "1.5rem",
    color: "#417351",
  },
  boton: {
    backgroundColor: "#417351",
    color: "white",
    alignItems: "center",
  },
  radioSelect: {
    fontSize: "large",
    paddingTop: 10,
  },
  checkboxes: {
    color: "#417351",
    "&$checked": {
      color: "blue",
    },
  },
  textRule: {
    display: "inline-flex",
    alignItems: "center",
  },
  iconCheck: {
    marginRight: "0.3rem",
    color: "green",
  },
  iconNoCheck: {
    marginRight: "0.3rem",
    color: "#f44336",
  },
}));
