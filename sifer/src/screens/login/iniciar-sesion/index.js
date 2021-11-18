import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    Container,
} from "@material-ui/core";
import LoginStyles from "./loginStyles";

import { style } from "@mui/system";
// import { BRAND_NAME } from '../constants'


const Login = () => {

    const classes = LoginStyles();
    

    // constructor(props) {
    //     super(props);
    //     this.state = { username: "", password: "", authflag: 1 };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(event) {
    //     this.setState({ username: event.state.username, password: event.state.password });
    // }
    // handleSubmit(event) {
    //     event.preventDefault();
    //     if (this.state.username == 'admin@littech.in' && this.state.password == 'secret') {
    //         this.props.history.push("/home");
    //     } else {
    //         alert('Incorrect Credntials!');
    //     }
    // }
    // render() {
    //     
    return (
        <Container maxWidth="md" style={{ marginBottom: "3rem", marginTop: "7rem"}}>
          {/* <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            // className={classes.root}
          > */}
            <Grid>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">INICIAR SESION</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className={classes.loginBackground}
                            >
                                {/* <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Iniciar Sesion
                                    </Typography>
                                </Grid> */}
                                <Grid item>
                                    <form onSubmit>
                                        <Grid container direction="column" spacing={2} >
                                            <Grid item >
                                                <TextField
                                                    type="email"
                                                    placeholder="Usuario"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    // value={this.state.username}
                                                    // onChange={(event) =>
                                                    //     this.setState({
                                                    //         [event.target.name]: event.target.value,
                                                    //     })
                                                    // }
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Clave"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    // value={this.state.password}
                                                    // onChange={(event) =>
                                                    //     this.setState({
                                                    //         [event.target.name]: event.target.value,
                                                    //     })
                                                    // }
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    style={{marginBottom: "1rem"}}
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className={classes.buttonBlock}
                                                >
                                                    Enviar
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item >
                                    <Link href="#" variant="body2" >
                                        Olvidó Clave?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        {/* </Grid> */}
        </Container>
        );
    }

export default Login;