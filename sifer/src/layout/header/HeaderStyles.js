import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.paletteCustom.backgroundBlack.main,
    padding:'1rem',
    height:'5rem',    
    display: "flex",
  },
  logo: {
    height: "3rem",
  },
}));
