import { React, useState } from "react";
import {
  Grid,
  Container,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";



const GastosTurno = () => {
  
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "7rem",
        borderRadius: 10,
      }}
    >
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: "#417351",
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          boxShadow: "0px 5px 5px rgba(0, 0, 0, .2)",
        }}
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
          Gastos del Turno
        </Typography>
      </Grid>

      <Grid
        container
        direction="column"
        alignItems="flex-end"
        style={{
          backgroundColor: "#ffffff",
          padding: "1rem",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          boxShadow: "0px 5px 5px rgba(0, 0, 0, .2)",
        }}
      >
        
        <Grid container direction="column" alignItems="center">
        <Typography variant="h6" >Nuevo Gasto:</Typography>
        <Box
            component="form"
            sx={{
              width: "30rem",
              maxWidth: "100%",
              marginTop: "0.1rem",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
          </Box>
          <Typography variant="h6">Descripción:</Typography>
          
          <Box
            component="form"
            sx={{
              width: "30rem",
              maxWidth: "100%",
              marginTop: "0.1rem",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
          </Box>
          <Button
          type="submit"
          
          style={{
            marginTop: "0.5rem",
            boxShadow: "0px 5px 5px rgba(0, 0, 0, .2)",
            width: "10rem",
            backgroundColor: "green",
            color: "white"
          }}
        >
          Enviar
        </Button>
          <Grid
            container
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{ marginTop: "2rem" }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              direction="column"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
            >
              <Typography variant="h6">Cargar un archivo de Gasto</Typography>
              <Button
                variant="contained"
                color="default"
                endIcon={<CloudUploadIcon />}
                style={{marginTop: "15px" }}
                id="fade-button"
                aria-controls="fade-menu"
                aria-haspopup="true"
               
                size="large"
              >
                SUBIR
              </Button>
            </Grid>

            <Grid
              container
              alignItems="center"
              direction="column"
              style={{
                backgroundColor: "#dddddd",
                borderRadius: 10,
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
              xl={6}
              lg={6}
              md={6}
              sm={6}
              xs={6}
            >
              <Typography variant="h6">Gastos Cargados en Turno</Typography>

              <Typography>Gasto 1:</Typography>
              <Typography
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                }}
              >
                  Compra de Yerba y Cafe
              </Typography>
              <Typography>Gasto 2:</Typography>
              <Typography
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                }}
              >
                  Error Surtidor
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        
        
      </Grid>
      {/* Boton de Cargar Posicion */}

      
      
    </Container>
  );
};
export default GastosTurno;