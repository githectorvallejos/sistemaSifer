import { React, useState, useEffect, useContext } from "react";
import { Grid, Typography,Container } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import homeStyles from './HomeStyles';

// Material UI components

const Home = () => {
  
  const classes = homeStyles();
  

  return (
    <Container maxWidth="fluid"
      className={classes.container}
    >
        <Grid
          container
          direction="column"
          alignItems="center"
          style={{ paddingTop: "10rem" }}
        >
          <CircularProgress size={90} style={{ color: "#ffffff" }} />
          <Typography
            variant="h5"
            style={{ color: "#ffffff", marginTop: "2rem" }}
          >
            Ingresando...
          </Typography>
        </Grid>
    </Container>
  );
};
export default Home;
