import {
    Container,
    Grid,
    Box,
    AppBar,
    Toolbar,
    Typography,
    TableContainer,
    Table,
    TableCell,
    TableBody,
    TableRow,
    TableHead,
    IconButton,
    TextField,
    InputAdornment,
  } from "@material-ui/core";
  import CheckIcon from "@material-ui/icons/Check";
  import Theme from "theme";
  
  const Surtidor = () => {
  
      const surtidor = [
          {
              nroIsla: 1,
              lado: 1,
              aforador: 103569,
          },
          {
            nroIsla: 1,
            lado: 2,
            aforador: 502569,
        },
        {
            nroIsla: 2,
            lado: 1,
            aforador: 110569,
        },
        {
            nroIsla: 2,
            lado: 2,
            aforador: 513569,
        },
      ];
      console.log("la Data", surtidor);
   
  
    return (
      <Container
        maxWidth="lg"
        style={{
          marginTop: "10rem",
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
                      align="center"
                      style={{
                        marginTop: "1rem",
                        height: "3rem",
                        color: "white",
                      }}
                    >
                      Surtidores
                    </Typography>
                  </Grid>
                  
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>
  
          <TableContainer >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ISLA</TableCell>
            <TableCell align="center">AFORADOR INICIAL</TableCell>
            <TableCell align="center">AFORADOR FINAL</TableCell>
            <TableCell align="center">LITROS</TableCell>
            <TableCell align="center">TOTAL RECAUDADO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell align="center" component="th" scope="row">
                {surtidor[0].nroIsla}
              </TableCell>
              
              <TableCell align="center">{surtidor[0].aforador}</TableCell>
              <TableCell align="center">
                <TextField
                  style={{ maxWidth: "12rem" }}
                  size="small"
                  id="outlined-basic-1"
                  variant="outlined"
                  defaultValue={"0000000"}
                  onChange
                  name
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ margin: 0, padding: 0 }}
                          onClick
                        >
                          <CheckIcon
                            fontSize="small"
                            style={{
                              color: "#ffffff",
                              backgroundColor: Theme.palette.primary.main,
                              margin: 0,
                              borderRadius: 5,
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </TableCell>
              <TableCell align="center">
                {surtidor[0].aforador - 99230}
              </TableCell>
              <TableCell align="center">
                {(surtidor[0].aforador - 99230) * 56}
              </TableCell>
              
            </TableRow>
            <TableRow >
              <TableCell align="center" component="th" scope="row">
                {surtidor[1].nroIsla}
              </TableCell>
              
              <TableCell align="center">{surtidor[1].aforador}</TableCell>
              <TableCell align="center">
                <TextField
                  style={{ maxWidth: "12rem" }}
                  size="small"
                  id="outlined-basic-1"
                  variant="outlined"
                  defaultValue={"0000000"}
                  onChange
                  name
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ margin: 0, padding: 0 }}
                          onClick
                        >
                          <CheckIcon
                            fontSize="small"
                            style={{
                              color: "#ffffff",
                              backgroundColor: Theme.palette.primary.main,
                              margin: 0,
                              borderRadius: 5,
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </TableCell>
              <TableCell align="center">
                {surtidor[1].aforador - 498380}
              </TableCell>
              <TableCell align="center">
                {(surtidor[1].aforador - 498380) * 56}
              </TableCell>
              
            </TableRow>
            <TableRow >
              <TableCell align="center" component="th" scope="row">
                {surtidor[2].nroIsla}
              </TableCell>
              
              <TableCell align="center">{surtidor[2].aforador}</TableCell>
              <TableCell align="center">
                <TextField
                  style={{ maxWidth: "12rem" }}
                  size="small"
                  id="outlined-basic-1"
                  variant="outlined"
                  defaultValue={"0000000"}
                  onChange
                  name
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ margin: 0, padding: 0 }}
                          onClick
                        >
                          <CheckIcon
                            fontSize="small"
                            style={{
                              color: "#ffffff",
                              backgroundColor: Theme.palette.primary.main,
                              margin: 0,
                              borderRadius: 5,
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </TableCell>
              <TableCell align="center">
                {surtidor[2].aforador - 8370}
              </TableCell>
              <TableCell align="center">
                {(surtidor[2].aforador - 8370) * 56}
              </TableCell>
              
            </TableRow>
            <TableRow >
              <TableCell align="center" component="th" scope="row">
                {surtidor[3].nroIsla}
              </TableCell>
              
              <TableCell align="center">{surtidor[3].aforador}</TableCell>
              <TableCell align="center">
                <TextField
                  style={{ maxWidth: "12rem" }}
                  size="small"
                  id="outlined-basic-1"
                  variant="outlined"
                  defaultValue={"0000000"}
                  onChange
                  name
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ margin: 0, padding: 0 }}
                          onClick
                        >
                          <CheckIcon
                            fontSize="small"
                            style={{
                              color: "#ffffff",
                              backgroundColor: Theme.palette.primary.main,
                              margin: 0,
                              borderRadius: 5,
                            }}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </TableCell>
              <TableCell align="center">
                {surtidor[3].aforador - 403569}
              </TableCell>
              <TableCell align="center">
                {(surtidor[3].aforador - 403569) * 56}
              </TableCell>
              
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        
        </Grid>
      </Container>
    );
  };
  
  export default Surtidor;