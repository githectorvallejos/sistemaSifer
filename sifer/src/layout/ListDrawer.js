import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import PersonIcon from "@material-ui/icons/Person";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import ErrorIcon from "@material-ui/icons/Error";
import { UserContext } from "../context/UserContext";
// sino te agarra el icono desde '@mui/icons-material/nombreIcono' reemplaza @mui/icons-material/ por  @material-ui/icons/;
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CircularProgress from "@material-ui/core/CircularProgress";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    color: "#c4c4c4",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListDrawer = () => {
  const classes = useStyles();
  const [userData, setUserData] = useContext(UserContext);
  const [openGestion1, setOpenGestion1] = useState(false);
  const [openGestion2, setOpenGestion2] = useState(false);
  const [openGestion3, setOpenGestion3] = useState(false);

  const handleOpenGestion1 = () => {
    setOpenGestion1(!openGestion1);
  };
  const handleOpenGestion2 = () => {
    setOpenGestion2(!openGestion2);
  };
  const handleOpenGestion3 = () => {
    setOpenGestion3(!openGestion3);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid>
        <List component="nav" className={classes.root}>
          <ListItem
            button onClick={handleOpenGestion1}
            component={NavLink}
            to="estadoProducto"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <DataUsageIcon style={{ color: "#c4c4c4" }} />
            </ListItemIcon>
            <ListItemText primary="Estado Producto" />
            {openGestion1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openGestion1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="/estado-producto/nivel-tanque"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <LocalLibraryIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Nivel del Tanque" />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="/estado-producto/ingreso-camion"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <LocalShippingIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Ingreso Camion" />
              </ListItem>
           
            </List>
          </Collapse>

          <ListItem button onClick={handleOpenGestion2}>
            <ListItemIcon>
              <DataUsageIcon style={{ color: "#c4c4c4" }} />
            </ListItemIcon>
            <ListItemText primary="Funciones de Playa" />
            {openGestion2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openGestion2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="/funciones-playa/turno-actual"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <PersonIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Turno Actual" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="planillaDeTurno"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <AttachFileIcon  style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Planilla de Turno" />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="/funciones-playa/pagos-tarjeta"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <CreditCardIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Pagos Tarjeta" />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="cuentaCorriente"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <CreditCardIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Cuenta Corriente" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="buzonDinero"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <AccountBalanceWalletIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Buzón Dinero" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="gastosDelTurno"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <MonetizationOnIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Gastos del Turno" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            button onClick={handleOpenGestion3}
            component={NavLink}
            to="rendicionesDelTurno"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <DataUsageIcon style={{ color: "#c4c4c4" }} />
            </ListItemIcon>
            <ListItemText primary="Rendiciones del Turno" />
            {openGestion3 ? (
              <ExpandLess onClick={handleOpenGestion3} />
            ) : (
              <ExpandMore onClick={handleOpenGestion3} />
            )}
          </ListItem>
          <Collapse in={openGestion3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="/totalesParciales"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <EnhancedEncryptionIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Totales Parciales" />
              </ListItem>

              <ListItem
                button
                className={classes.nested}
                component={NavLink}
                to="/cierreParcial"
                activeClassName="Mui-selected"
              >
                <ListItemIcon>
                  <ErrorIcon style={{ color: "#c4c4c4" }} />
                </ListItemIcon>
                <ListItemText primary="Cierre Parcial" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            button
            component={NavLink}
            to="/surtidores"
            activeClassName="Mui-selected"
          >
            <ListItemIcon>
              <AssessmentIcon style={{ color: "#c4c4c4" }} />
            </ListItemIcon>
            <ListItemText primary="Surtidores" />
          </ListItem>
        </List>
        <Divider />
      </Grid>
      
      <Grid
        style={{
          bottom: "7.5rem",
          position: "absolute",
        }}
      >
        <List component="nav">
          <ListItem activeClassName="Mui-selected" alignItems="flex-start">
            <ListItemIcon>
              <PersonIcon style={{ color: "#c4c4c4" }} />
            </ListItemIcon>
            <ListItemText>
              {" "}
              <Grid container direction="column" alignItems="flex-start">
                <Typography variant="body" style={{ color: "#ffffff" }}>
                  Gonzalez Hector
                </Typography>

                <Typography variant="body" style={{ color: "#ffffff" }}>
                  Sector: Playa
                </Typography>
                <Typography variant="body" style={{ color: "#ffffff" }}>
                  Turno: 06:00 - 14:00 TM
                </Typography>
              </Grid>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default ListDrawer;
