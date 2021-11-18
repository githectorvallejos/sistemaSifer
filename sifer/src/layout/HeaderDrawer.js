import React, { useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Grid,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/img/logo.png";

import { Link } from "react-router-dom";

import MoreIcon from "@material-ui/icons/MoreVert";

const drawerWidth = 220;

const styles = (theme) => ({
  container: {
    backgroundColor: "#FFFFFF",
    height: "5rem",
    justifyContent: "space-between",
  },
  logo: {
    height: "5rem",
  },
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  textButton: {
    flexGrow: 1,
    textAlign: "center",
  }
  },
});

const Header = (props) => {
  //   const classes = styles();
  const { open, classes } = props;
  const { loginWithRedirect } = useAuth0();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const renderMobileMenu = (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <Typography
            onClick
            style={{ marginRight: "1rem"}}
          >
            INGRESAR
          </Typography>


        </MenuItem>
      </Menu>
    </>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        foojon={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={true}>
          <Grid container alignItems="center" className={classes.container}>
            <Grid item>
              <div className={classes.menuButton}></div>
            </Grid>
            <Grid item>
              <Link to="/">
                <img src={Logo} className={classes.logo} alt="logo" />
              </Link>
            </Grid>

            <Grid item>
              <div className={classes.sectionDesktop}>
                <IconButton color="primary" style={{ backgroundColor: "green", marginRight: "0.2rem" }}>
                  <Link to="/login/iniciar-sesion">
                  <Typography
                    // onClick={() => loginWithRedirect()}
                    
                    alignItems="center"
                    className={classes.textButton}
                    style={{ color: "#FFFFFF"}}
                  >
                    Ingresar
                  </Typography>
                  </Link>
                  
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
              {renderMobileMenu}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
