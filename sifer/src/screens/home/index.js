import { React, useState, useEffect, useContext } from "react";
import { Grid, Typography,Container, Box, Button, TextField, InputAdornment, IconButton, Link } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import homeStyles from './HomeStyles';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Theme from "theme";
import Logo from "../../assets/img/logo.png";
// import { LogIn } from "context/LogInContext";
import {UserContext} from "context/UserContext";
import { useHistory } from "react-router-dom";

import { User } from "@auth0/auth0-spa-js";


// Material UI components

const Home = () => {

  const [error, setError] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  // const { logged, activateLogged } = useContext(LogIn);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const { user, setUser } = useContext(UserContext);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

   // Funcion para mostrar password
   const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const history = useHistory();


  // const guardarSesion = () => {
  //   activateLogged(!logged);
  // };

  const handleHelperText = () => {
    setErrorLogin(null);
    setError(false);
    setLoading(false);
  };

  const iniciarSesion = () => {
    setLoading(true);
    const data = {
      email: values.email,
      password: values.password,
    }
    
    if(values.email = "emailprueba@test.com"){
        // const token = jwt(data);
        localStorage.setItem("logeado", data);

        setUser({
          user_id: "100",
          user_name: "Usuario Prueba",
          user_email: values.email,
          user_rol: "1",
          user_nombreRol: "administrador",
        });
        // guardarSesion();
        history.push("/funciones-playa/turno-actual");
    } else {
      console.log("Entro por aca", error);
      setError(true);
      setErrorLogin("Datos inválidos. Verifique usuario y/o clave");
    }
    console.log("USUARIO", user);
  }

 

  
  const classes = homeStyles();
  

  return (
    // <Container maxWidth="fluid"
    //   className={classes.container}
    // >
    //     <Grid
    //       container
    //       direction="column"
    //       alignItems="center"
    //       style={{ paddingTop: "10rem" }}
    //     >
    //       {/* <CircularProgress size={90} style={{ color: "#ffffff" }} />
    //       <Typography
    //         variant="h5"
    //         style={{ color: "#ffffff", marginTop: "2rem" }}
    //       >
    //         Ingresando...
    //       </Typography> */}
    //       <Grid container item direction="column" alignItems="center">
    //         <Box
    //           component="img"
    //           sx={{
    //             height: "60%",
    //             width: "100%",
    //             backgroundColor: "white",
    //           }}
    //           alt="Logo"
    //           // src={Logo}
              
    //         />
    //         <Button
    //           variant="contained"
    //           size="large"
    //           style={{ marginTop: "2rem" }}
    //           color="primary"
    //           // onClick={handleClick}
    //         >
    //           INICIAR SESION
    //         </Button>
    //       </Grid>
    //     </Grid>
    // </Container>

<Grid
container
justifyContent="center"
alignContent="center"
style={{
  backgroundImage: `url("https://www.sifergas.com.ar/dataEst/images/11.jpg")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "91.9vh",
  width: "100vw",
  
}}
>
{" "}
<Grid
  xl={3}
  lg={4}
  md={6}
  sm={6}
  xs={11}
  container
  style={{
    marginTop: "6rem",
    marginBottom: "5rem",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingLeft: 0,
    paddingRight: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }}
>
  <Grid
    container
    item
    justifyContent="center"
    alignContent="center"
    style={{
      backgroundColor: "white",
      height: "5rem",
      width: "100%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }}
  >
    <Box
      component="img"
      sx={{
        height: 64,
        marginTop: "2rem"
        
      }}
      alt="Logo"
      src={Logo}
    />
  </Grid>
  <Grid
    container
    item
    direction="column"
    justifyContent="space-between"
    style={{ padding: "2rem" }}
  >
    <TextField
      // error={error}
      fullWidth
      variant="outlined"
      label="E-Mail"
      name="email"
      // onChange={handleChange("email")}
      // onClick={handleHelperText}
    />
    <TextField
      // error={error}
      fullWidth
      variant="outlined"
      label="Contraseña"
      // type={values.showPassword ? "text" : "password"}
      name="password"
      style={{ marginTop: "1rem" }}
      // value={values.password}
      // helperText={errorLogin}
      // onChange={handleChange("password")}
      // onClick={handleHelperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    <Grid container item direction="column" align="center">
      <Button
        variant="contained"
        // disabled={loading}
        style={{ marginTop: "2rem" }}
        color="primary"
        onClick={iniciarSesion}
      >
        Confirmar
      </Button>
      <Link
        color="inherit"
        to="/auth/recover-password"
        style={{ color: Theme.palette.primary.main, marginTop: "1rem" }}
      >
        ¿Olvidaste tu Contraseña?
      </Link>
      <Typography
        align="center"
        variant="subtitle2"
        style={{ marginTop: "2rem" }}
      >
        {" "}
        ¿ERES NUEVO?
      </Typography>
      <Link
        to="/auth/register"
        variant="body2"
        underline="none"
        style={{ color: Theme.palette.primary.main }}
      >
        Crea una cuenta
      </Link>
    </Grid>
  </Grid>
</Grid>
</Grid>
  );
};
export default Home;
