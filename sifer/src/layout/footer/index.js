import { Grid, Typography } from "@material-ui/core";
import * as React from "react";
import FooterStyles from "./FooterStyles";

const Footer = () => {
  const classes = FooterStyles();
  return (
    <Grid container justifyContent='center' className={classes.container}>
      <Grid
        container
        direction="column"
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        className={classes.footerComponent}
        style={{ backgroundColor: "#0000ff00", textAlign: "center" }}
      >
        <Typography variant="body" style={{ color: "#ffffff" }}>
          Copyright © 2021
        </Typography>
        <Typography variant="h6" style={{ color: "#ffffff" }}>
          SIFER GAS S.A.
        </Typography>
      </Grid> 
    </Grid>
  );
};
export default Footer;
