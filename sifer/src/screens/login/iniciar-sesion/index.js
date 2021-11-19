import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
    Container,
    Avatar,
} from "@material-ui/core";
import LoginStyles from "./loginStyles";
import { LockOpenOutlined } from "@material-ui/icons";

// import { BRAND_NAME } from '../constants'


const Login = () => {

    const classes = LoginStyles();
    
    return (
        <Container maxWidth="fluid"
            className={classes.container}
        >
            <Grid container spacing={0} justify="center" direction="row" style={{ marginTop: "1rem" }}>
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
                            elevation={5}
                            className={classes.loginBackground}
                        >                            
                            <Avatar style={{ marginLeft: "5rem", marginBottom: "1rem", color: "green", }}>
                                <LockOpenOutlined />
                            </Avatar>
                            <Typography variant="h6" style={{ marginLeft: "2rem", marginBottom: "1rem", color: "green", }}> Iniciar Sesion</Typography>
                            <Grid item>
                                <form onSubmit>
                                    <Grid container direction="column" spacing={2} >
                                        <Grid item >
                                            <TextField
                                                type="email"
                                                label="usuario"
                                                fullWidth
                                                name="username"
                                                variant="outlined"
                                                // value={this.state.username}
                                                // onChange={(event) =>
                                                //     this.setState({
                                                //         [event.target.name]: event.target.value,
                                                //     })
                                                // }
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                label="Clave"
                                                fullWidth
                                                name="password"
                                                variant="outlined"
                                            // value={this.state.password}
                                            // onChange={(event) =>
                                            //     this.setState({
                                            //         [event.target.name]: event.target.value,
                                            //     })
                                            // }
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                style={{ marginBottom: "1rem" }}
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
                            <Grid item align="center" >
                                <Link href="#" variant="body2" >
                                    Olvidó Clave?
                                </Link>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        );
    }

export default Login;