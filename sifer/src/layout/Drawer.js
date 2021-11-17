import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";

import LoadRoutes from "../config/LoadRoutes";

import Header from "./HeaderDrawer";
// import HeaderAuth from "./HeaderDrawerAuth";
import Footer from "./footer";
import ListDrawer from "./ListDrawer";

import { useAuth0 } from "@auth0/auth0-react";

const drawerWidth = 360;

const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width:"100%"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    marginTop: "5rem",
  },
  drawerOpen: {
    marginTop: "5rem",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // backgroundColor: "#474747",
    backgroundColor: "green",
  },
  drawerClose: {
    marginTop: "5rem",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: "#474747",
  },
  content: {
    flexGrow: 1,
    marginBottom: 0,
    backgroundColor: "#F0F0F0",
    minHeight:'100vh',
    display: "flex",
    flexDirection: 'column',
    alignItems: "stretch"
  },
  contentMin: {
    flexGrow: 1,
  },
});

const MiniDrawer = (props) => {
  const { isAuthenticated } = useAuth0();
  const [open, setOpen] = useState(true);

  const { classes, routes } = props;
  return (
    <div className={classes.root}>
      <Header open={open} setOpen={setOpen} />

          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
            open={open}
          >
            <ListDrawer />
          </Drawer>
       
      <main className={classes.content}>
        <div className={classes.contentMin}>
          <LoadRoutes routes={routes} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
