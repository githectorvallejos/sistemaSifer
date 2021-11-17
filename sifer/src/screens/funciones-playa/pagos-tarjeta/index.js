import {
  Container,
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  IconButton,
} from "@material-ui/core";
//import CheckIcon from "@material-ui/icons/Check";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import Theme from "theme";
import { Delete } from "@material-ui/icons";

const PagosTarjeta = () => {

    const activo = [
        {
            nroCupon: 1001,
            tipoTarjeta: "VISA",
            montoPago: "$980",
            formaPago: "Debito",
            fechaPago: "16/11/2021"
        },
        {
            nroCupon: 1002,
            tipoTarjeta: "MASTERCARD",
            montoPago: "$1080",
            formaPago: "Debito",
            fechaPago: "17/11/2021"
        },
        {
            nroCupon: 1003,
            tipoTarjeta: "NARANJA",
            montoPago: "$3500",
            formaPago: "Debito",
            fechaPago: "17/11/2021"
        },
        {
          nroCupon: 1003,
          tipoTarjeta: "MERCADO PAGO",
          montoPago: "$15600",
          formaPago: "Debito",
          fechaPago: "17/11/2021"
      }
    ];
    console.log("la Data", activo);
 

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "5rem",
        borderRadius: 10,
        backgroundColor: "#ffffff00",
        minHeight: "30rem",
        paddingTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Grid
        container
        item
        style={{
          backgroundColor: "#ffffff",
          marginTop: "1rem",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, .2)",
          borderRadius: 10,
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          style={{
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "#417351",
            height: "5rem",
          }}
        >
          <Box
            sx={{ flexGrow: 1 }}
            style={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: "5rem",
              marginTop: -65,
              background: "transparent",
              boxShadow: "none",
            }}
          >
            <AppBar
              position="static"
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                height: "5rem",
                marginTop: 40,
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Toolbar>
                <Grid
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={6}
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignContent="flex-start"
                  style={{}}
                >
                  <Typography
                    variant="h5"
                    style={{
                      marginTop: "1rem",
                      height: "3rem",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    PAGOS CON TARJETAS
                  </Typography>
                </Grid>
                <Grid
                  container
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={6}
                  direction="column"
                  justifyContent="flex-end"
                  alignContent="flex-end"
                >
                  <InputBase
                    size="small"
                    id="filled-size-small"
                    placeholder="Número de cupón"
                    // InputLabelProps={{  }}
                    variant="outlined"
                    
                    endAdornment={<SearchIcon />}
                  />
                </Grid>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>

        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: "center" }}>
                  Número de Cupón
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>Tipo Tarjeta</TableCell>
                <TableCell style={{ textAlign: "center" }}>Monto</TableCell>
                <TableCell style={{ textAlign: "center" }}>Forma de Pago</TableCell>
                <TableCell style={{ textAlign: "center" }}>Fecha</TableCell>
                <TableCell style={{ textAlign: "center" }}>Acciones</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow>
                  <TableCell style={{ textAlign: "center" }}>
                    {activo[0].nroCupon}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[0].tipoTarjeta}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[0].montoPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[0].formaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[0].fechaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton
                      onClick
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: 5,
                        backgroundColor: Theme.palette.primary.main,
                        color: "#ffffff",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <Delete style={{ height: "1.2rem", width: "1.2rem" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ textAlign: "center" }}>
                    {activo[1].nroCupon}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[1].tipoTarjeta}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[1].montoPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[1].formaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[1].fechaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton
                      onClick
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: 5,
                        backgroundColor: Theme.palette.primary.main,
                        color: "#ffffff",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <Delete style={{ height: "1.2rem", width: "1.2rem" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ textAlign: "center" }}>
                    {activo[2].nroCupon}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[2].tipoTarjeta}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[2].montoPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[2].formaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[2].fechaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton
                      onClick
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: 5,
                        backgroundColor: Theme.palette.primary.main,
                        color: "#ffffff",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <Delete style={{ height: "1.2rem", width: "1.2rem" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ textAlign: "center" }}>
                    {activo[3].nroCupon}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[3].tipoTarjeta}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[3].montoPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[3].formaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {activo[3].fechaPago}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton
                      onClick
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: 5,
                        backgroundColor: Theme.palette.primary.main,
                        color: "#ffffff",
                        marginLeft: "0.5rem",
                      }}
                    >
                      <Delete style={{ height: "1.2rem", width: "1.2rem" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default PagosTarjeta;