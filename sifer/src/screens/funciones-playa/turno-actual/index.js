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

const TurnoActual = () => {

    const activo = [
        {
            nroCupon: 1001,
            tipoTarjeta: "15/11/2021",
            montoPago: "-",
            formaPago: "AB123CD",
            fechaPago: "Juan Perez"
        },
        {
            nroCupon: 1002,
            tipoTarjeta: "01/11/2021",
            montoPago: "15/11/2021",
            formaPago: "CD332AA",
            fechaPago: "Jorge Mendez"
        },
        {
            nroCupon: 1003,
            tipoTarjeta: "01/10/2021",
            montoPago: "15/10/2021",
            formaPago: "DE221AB",
            fechaPago: "Pedro Sanchez"
        },
        {
        nroCupon: 1003,
        tipoTarjeta: "15/09/2021",
        montoPago: "01/10/2021",
        formaPago: "AC123CD",
        fechaPago: "Juan Perez"
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
                    PERSONAL
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
                alignContent="flex-end">
                    
                </Grid>
            </Toolbar>
            

            </AppBar>
        </Box>
        </Grid>


        
    </Grid>
    </Container>
);
};

export default TurnoActual;