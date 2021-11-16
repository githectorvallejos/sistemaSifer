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
import Logo from "../assets/img/Logo.svg";

import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

import Badge from "@material-ui/core/Badge";

import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const drawerWidth = 220;

const styles = (theme) => ({
  container: {
    backgroundColor: theme.paletteCustom.backgroundBlack.main,
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
    // marginRight: 12,
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
  },
});

const Header = (props) => {
  //   const classes = styles();
  const { open, setOpen, classes } = props;
  const { logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        <MenuItem
          component={Link}
          to="/create-user"
          onClick={handleMobileMenuClose}
        >
          Crear usuario
        </MenuItem>
        <MenuItem
          component={Link}
          to="/edit-user"
          onClick={handleMobileMenuClose}
        >
          Modificar usuario
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <Typography onClick={() => logout()} style={{ marginRight: "1rem" }}>
            Salir
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
  const renderMenu = (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={!!anchorEl}
        onClose={handleClose}
      >
        <MenuItem component={Link} to="/create-user" onClick={handleClose}>
          Crear usuario
        </MenuItem>
        <MenuItem component={Link} to="/edit-user" onClick={handleClose}>
          Modificar usuario
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
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawer}
                className={classes.menuButton}
              >
                <MenuIcon
                  classes={{
                    root: open
                      ? classes.menuButtonIconOpen
                      : classes.menuButtonIconClosed,
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Link to="/">
                <img src={Logo} className={classes.logo} alt="logo" />
              </Link>
            </Grid>

            <Grid item>
              <div className={classes.sectionDesktop}>
                <IconButton
                  aria-owns={!!anchorEl ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Typography>Opciones</Typography>
                </IconButton>
                <IconButton color="inherit">
                  <Typography
                    onClick={() => logout()}
                    style={{ marginRight: "1rem" }}
                  >
                    Salir
                  </Typography>
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
              {renderMenu}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
