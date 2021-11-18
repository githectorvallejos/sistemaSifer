import { React} from "react";
import {
  Grid,
  Container,
  Typography,
} from "@material-ui/core";



const PlanillaTurno= () => {
  
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
          Planilla de Turno
        </Typography>

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
        
        
        </Grid>
      </Grid>
    </Container>
  );
};
export default PlanillaTurno;