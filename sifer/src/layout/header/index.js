import * as React from "react";
import HeaderStyles from "./HeaderStyles";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid, Typography } from "@material-ui/core";
import Logo from "../../assets/img/nasini-logo-chicho-copia.png";

const Header = () => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  const credenciales = useAuth0()

  // console.log(useAuth0());
  const classes = HeaderStyles();

  console.log(credenciales.user);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      item
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      className={classes.container}
    >
      <Grid>
        <Typography>email</Typography>
        <Typography>empresa</Typography>
        <Typography>rol</Typography>
      </Grid>
      
      <Grid
        container
        item
        justify="center"
        alignItems="center"
        xl={11}
        lg={11}
        md={10}
        sm={9}
        xs={9}
      >
        <img src={Logo} className={classes.logo} alt="logo" />
      </Grid>

      <Grid
        container
        item
        justify="center"
        alignItems="center"
        xl={1}
        lg={1}
        md={2}
        sm={3}
        xs={3}
      >
        <Button
          onClick={
            !isAuthenticated ? () => loginWithRedirect() : () => logout()
          }
          color="primary"
          variant="contained"
          style={{ height: "3rem" }}
        >
          {!isAuthenticated ? "Ingresar" : "Salir"}
        </Button>
      </Grid>
    </Grid>
  );
};
export default Header;
