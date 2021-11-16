import { React, useEffect, useState, useContext } from "react";
import EditUserStyles from "./EditUserStyles";
import {
  Grid,
  Container,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  CircularProgress,
  IconButton,
  Backdrop,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import usuarioService from "services/usuario.service";
import { UserContext } from "context/UserContext";
import { UserManage } from "context/UserManage";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";

const EditUser = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [userFilter, setUserFilter] = useContext(UserManage);
  const [userRol, setUserRoles] = useState(
    userData?.usuario_metadata?.roles
    //userData?.usuario_data["http://localhost:3000/roles"]
  );
  const [rolSeleccionado, setRolSeleccionado] = useState({});

  const roles = [
    {
      idRol: 1,
      nombre: "SuperAdmin",
    },
    {
      idRol: 2,
      nombre: "Administrador",
    },
    {
      idRol: 3,
      nombre: "Operador",
    },
    {
      idRol: 4,
      nombre: "Backoffice",
    },
  ];

  //hooks
  const classes = EditUserStyles();
  let history = useHistory();

  //fetch a getUsers() get all users
  const traerUsuarios = async () => {
    try {
      const res = await usuarioService.getUsers();
      return res.data.mensaje;
    } catch (error) {
      console.log(error);
    }
  };

  //Implements react query
  const {
    data: usuarios,
    isLoading,
    isError,
  } = useQuery("users", traerUsuarios, {
    onSuccess: (data) => {
      setUserFilter(data);
      console.log("se setea a filter", data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  console.log("los datos", usuarios)

  /**
   *
   * @param  {String} o recibe algo
   * @return devuelvo los filtros
   */

  const cambiarFiltro = (o) => {
    /**
     * Why this if
     */
    if (
      o.props.value === 1 ||
      o.props.value === 2 ||
      o.props.value === 3 ||
      o.props.value === 4
    ) {
      setRolSeleccionado({
        idRol: o.props.value,
        nombre: o.props.children,
      });

      /* usuarios.forEach((usr) => {
        if (usr.user_metadata?.roles?.includes(o.props.children)) {
          //   setUsuariosFiltrados([...usuariosFiltrados, usr]);
          auxUsuariosFiltrados.push(usr);
          console.log(usuariosFiltrados);
        }
      });
      setUsuariosFiltrados(auxUsuariosFiltrados); */

      if (usuarios) {
        let result = usuarios.filter((usr) =>
          usr.user_metadata?.roles?.includes(o.props.children)
        );
        setUserFilter(result);
      }
    } else {
      setRolSeleccionado({});
      setUserFilter(usuarios);
    }
  };

  //   cambiarFiltro

  /*  useEffect(() => {
    traerUsuarios();
  }, []); */

  return (
    <Container maxWidth="lg" style={{marginTop: "7rem"}}>
      <Grid
        container
        direction="column"
        spacing="3"
        justifyContent="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundColor: "#417351",
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginBottom: 15,
          }}
        >
          <PeopleRoundedIcon
            style={{
              fontSize: "2rem",
              color: "#ffffff",
              marginRight: "0.5rem",
            }}
          />
          <Typography
            variant="h5"
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Lista de Usuarios
          </Typography>
        </Grid>

        <Grid container item style={{ marginTop: "1rem" }}>
          <FormControl variant="outlined">
            <InputLabel id="label-select-empresa">Tipo de usuario</InputLabel>
            <Select
              style={{ width: "20rem" }}
              labelId="label-select-empresa"
              id="select-empresa"
              value={rolSeleccionado?.idRol ? rolSeleccionado.idRol : 0}
              onChange={(e, o) => cambiarFiltro(o)}
              label="Tipo de usuario"
            >
              <MenuItem value="0">
                <em>Seleccionar tipo de usuario</em>
              </MenuItem>

              {userRol && userRol.includes("SuperAdmin") ? (
                <MenuItem value={roles[1].idRol}>{roles[1].nombre}</MenuItem>
              ) : null}

              {userRol && userRol.includes("Administrador") ? (
                <MenuItem value={roles[2].idRol}>{roles[2].nombre}</MenuItem>
              ) : null}
              {userRol && userRol.includes("Administrador") ? (
                <MenuItem value={roles[3].idRol}>{roles[3].nombre}</MenuItem>
              ) : null}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          container
          item
          style={{
            marginTop: "1rem",
            overflow: "auto",
            backgroundColor: "#55555500",
            minHeight: "20rem",
          }}
        >
          <TableContainer style={{ maxHeight: "50vh" }}>
            <Table>
              {isLoading ? (
                <Grid container justifyContent="center" alignContent="center">
                  <CircularProgress />
                </Grid>
              ) : (
                <>
                  <TableHead>
                    <TableCell>Editar</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre y Apellido</TableCell>
                    <TableCell>Empresa</TableCell>
                    <TableCell>Tipo de usuario</TableCell>
                    <TableCell>Email</TableCell>
                  </TableHead>

                  {isError ? (
                    <Typography>
                      No se pudo obtener los datos en éste momento
                    </Typography>
                  ) : userFilter && userFilter.length > 0 ? (
                    <TableBody>
                      {userFilter.map(
                        (usuario) =>
                          ((userRol.includes("SuperAdmin") &&
                            usuario?.user_metadata?.roles?.includes(
                              "Administrador"
                            )) ||
                            (userRol.includes("Administrador") &&
                              (usuario?.user_metadata?.roles?.includes(
                                "Operador"
                              ) ||
                                usuario?.user_metadata?.roles?.includes(
                                  "Backoffice"
                                )))) && (
                            <TableRow
                              key={usuario.id}
                              onClick={() => console.log(usuario.name)}
                            >
                              <TableCell>
                                <IconButton
                                  onClick={() =>
                                    history.push("/edit-user-form", usuario)
                                  }
                                >
                                  <EditIcon color="primary" />
                                </IconButton>
                              </TableCell>
                              <TableCell>{usuario.user_id}</TableCell>
                              <TableCell>{usuario.name}</TableCell>
                              <TableCell>
                                {usuario?.user_metadata?.empresa
                                  ? usuario.user_metadata.empresa
                                  : "Sin datos"}
                              </TableCell>
                              <TableCell>
                                {usuario?.user_metadata?.roles
                                  ? usuario.user_metadata.roles
                                  : "Sin datos"}
                              </TableCell>
                              <TableCell>{usuario.email}</TableCell>
                            </TableRow>
                          )
                      )}
                    </TableBody>
                  ) : (
                    <Typography variant="body1" color="initial">
                      No se encuentran resultados
                    </Typography>
                  )}
                </>
              )}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};
export default EditUser;
