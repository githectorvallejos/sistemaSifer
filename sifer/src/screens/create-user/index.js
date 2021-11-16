import { React, useEffect, useState, useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import CreateUserStyles from "./CreateUserStyles";
import {
  FormControl,
  Radio,
  FormGroup,
  Checkbox,
  FormHelperText,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Grid,
  TextField,
  Container,
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import rules from "constants/rules";
import { useHistory } from "react-router-dom";
import usuarioService from "services/usuario.service";
import ButtonLoading from 'components/buttonLoading/ButtonLoading';

//Icons
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

const CreateUser = () => {
  // Variables y Constantes
  let history = useHistory();
  const classes = CreateUserStyles();
  const [userData, setUserData] = useContext(UserContext);
  const [userRol, setUserRoles] = useState(
    userData?.usuario_data["http://localhost:3000/roles"]
  );
  console.log(userRol);
  const [rolElegido, setRolElegido] = useState(
    userRol && userRol.includes("SuperAdmin") ? "Administrador" : "Operador"
  );
  const [estrategiasState, setEstrategiasState] = useState({
    estrategia1: true,
    estrategia2: false,
    estrategia3: false,
  });

  const [isLoading, setIsLoading] = useState(false)

  //INICIO DECLARACIONES DE LIBRERIA ENCARGADA DE VALIDACIONES
  const { register, trigger, handleSubmit, errors, control, watch } = useForm();

  let password = watch("password", "");
  let passwordConfirm = watch("passwordConfirm", "");
  let rol = watch("Rol", "Operador");

  useEffect(() => {
    setRolElegido(rol);
  }, [rol]);

  const handleChangeEstrategias = (event) => {
    setEstrategiasState({
      ...estrategiasState,
      [event.target.name]: event.target.checked,
    });
  };

  const { estrategia1, estrategia2, estrategia3 } = estrategiasState;
  const error =
    [estrategia1, estrategia2, estrategia3].filter((v) => v).length === 0;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const [disabledButton, setDisabledButton] = useState(false);

  //FUNCION QUE SE EJECUTA CUANDO SE HACE SUBMIT DEL FORM DE CREAR USUARIO
  const onSubmit = async (data) => {
    let sendData = data.rol ? data : { ...data, rol: rolElegido };
    if (sendData.rol === "Operador") {
      sendData = sendData.estrategias
        ? sendData
        : { ...sendData, estrategias: estrategiasState };
    }
    if (userRol.includes("SuperAdmin")) {
      sendData = {
        ...sendData,
        rol: "Administrador",
        estrategias: {
          estrategia1: true,
          estrategia2: true,
          estrategia3: true,
        },
      };
    }

    if (!error) {
      try {
        setIsLoading(true)
        let modifica3 = {
          email: sendData.email,
          blocked: false,
          email_verified: false,
          app_metadata: {},
          user_metadata: {
            empresa: "Nasini",
            roles: sendData.rol,
            estrategias: sendData.estrategias,
          },
          given_name: sendData.nombre,
          family_name: sendData.apellido,
          name: sendData.nombre + " " + sendData.apellido,
          nickname: sendData.usuario,
          picture:
            "https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png",
          connection: "Username-Password-Authentication",
          password: sendData.password,
          verify_email: false,
        };
        console.log("los datos a mandar--->", modifica3)
        const res = await usuarioService.createUser(modifica3);
        console.log(res);
        if (res.status === 200) {
          setIsLoading(false)
          if (window.confirm('Usuario creado exitosamente') ) {
            history.push("/edit-user")
        }
        }
      } catch (e) {
        console.log(e.response);
        setIsLoading(false)
        if (e.response.status === 409) {
          alert("El email ya se encuentra registrado")  
        }else if (e.response.status === 404){
          alert("El rol, que desea asignar al usuario no existe")
        }
        else{
          alert("No se puede registrar usuario en este momento")
        }
        }
      }
    }

  //Function for control if the password have 8 characters length.
  const lengthRight = password?.length > 7;
  function controlCharacters() {
    return (
      <div className={classes.textRule}>
        {lengthRight ? (
          <CheckIcon className={classes.iconCheck} />
        ) : (
          //If not
          <ClearIcon className={classes.iconNoCheck} />
        )}
        <Typography variant="body1">Mínimo 8 caracteres</Typography>
      </div>
    );
  }

  //Function for control if the password have minimium 1 uppercase
  const regexUpper = /[A-Z]/;
  const upperRight = regexUpper.test(password);
  function controlUppercase() {
    return (
      <div className={classes.textRule}>
        {upperRight ? (
          <CheckIcon className={classes.iconCheck} />
        ) : (
          //If not
          <ClearIcon className={classes.iconNoCheck} />
        )}
        <Typography variant="body1">Al menos una mayuscula</Typography>
      </div>
    );
  }

  //Function for control if the password have minimium 1 number
  const regexNumber = /[0-9]|[!@#$%^&*_-]/;
  const specialRight = regexNumber.test(password);
  function controlSpecial() {
    return (
      <div className={classes.textRule}>
        {specialRight ? (
          <CheckIcon className={classes.iconCheck} />
        ) : (
          //If not
          <ClearIcon className={classes.iconNoCheck} />
        )}
        <Typography variant="body1">
          Al menos un número o caracter especial
        </Typography>
      </div>
    );
  }

  //Function for control if the password is same passwordConfirm
  function controlMatch() {
    return (
      <div className={classes.textRule}>
        {passwordConfirm === password && passwordConfirm !== "" ? (
          <CheckIcon className={classes.iconCheck} />
        ) : (
          //If not
          <ClearIcon className={classes.iconNoCheck} />
        )}
        <Typography variant="body1">Las contraseñas deben coincidir</Typography>
      </div>
    );
  }

  useEffect(() => {
    //consider this to be onchange function
    controlCharacters();
    controlUppercase();
    controlSpecial();
    controlMatch();
  }, [password]);

  return (
    <Container maxWidth="md" style={{ marginBottom: "3rem", marginTop: "7rem"}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
          className={classes.root}
        >
          {/* Titulo de la vista */}
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
            <AssignmentOutlinedIcon
              style={{
                fontSize: "2rem",
                color: "#ffffff",
                marginRight: "0.5rem",
              }}
            />
            <Typography
              variant="h5"
              style={{
                //color: "#417351",
                color: "white",
                textAlign: "center",
              }}
            >
              {userRol && userRol.includes("Administrador")
                ? "Crear Usuario"
                : "Crear Administrador"}
            </Typography>
          </Grid>

          {/* Sección de formulario común para todos los roles */}
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={6}
          >
            <Grid item xs={12} md={6}>
              <Controller
                name="nombre"
                control={control}
                defaultValue=""
                rules={rules.nombre}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Nombre"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                    //onChange={handleChangeData}
                  />
                )}
              />
              {/* <p>{errors.nombre?.message}</p> */}
            </Grid>

            <Grid item xs={12} md={6}>
              <Controller
                name="apellido"
                control={control}
                defaultValue=""
                rules={rules.apellido}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    id="apellido"
                    label="Apellido"
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : null}
                    //onChange={handleChangeData}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={rules.email}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    id="email"
                    label="Email"
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : null}
                    //onChange={handleChangeData}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="usuario"
                control={control}
                defaultValue=""
                rules={rules.usuario}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    id="usuario"
                    label="Usuario"
                    variant="outlined"
                    error={!!error}
                    cesaracosta13L
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={rules.password}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    id="password"
                    label="Contraseña"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {!showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="passwordConfirm"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) => {
                    return value === password;
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    id="passwordConfirm"
                    label="Confirmar Contraseña"
                    variant="outlined"
                    type={showPasswordConfirm ? "text" : "password"}
                    name="passwordConfirm"
                    error={!!error}
                    helperText={error ? error.message : null}
                    //onChange={handleChangeData}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordConfirm}
                          >
                            {!showPasswordConfirm ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <br />
              <div>
                <Typography style={{ paddingTop: 10, paddingBottom: 10 }}>
                  Requerimientos de contraseña
                </Typography>
                {controlCharacters()}
                <br />
                {controlUppercase()}
                <br />
                {controlSpecial()}
                <br />
                {controlMatch()}
              </div>
            </Grid>
          </Grid>

          {/* Sección de formulario para rol Administrador */}
          {userRol && userRol.includes("Administrador") ? (
            <>
              <Grid
                item
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={3}
                style={{ marginTop: "0.5rem" }}
              >
                {/* Sección de selección de rol */}
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel
                      component="legend"
                      className={classes.tituloElegibles}
                    >
                      Tipo de usuario:
                    </FormLabel>
                    <Controller
                      render={({ field }) => (
                        <RadioGroup
                          aria-label="gender"
                          {...field}
                        >
                          <FormControlLabel
                            value="Operador"
                            control={<Radio size="small" color="primary" />}
                            label={
                              <Typography variant="body1">Operador</Typography>
                            }
                          />
                          <FormControlLabel
                            value="Backoffice"
                            control={<Radio size="small" color="primary" />}
                            label={
                              <Typography variant="body1">
                                BackOffice
                              </Typography>
                            }
                          />
                        </RadioGroup>
                      )}
                      name="Rol"
                      control={control}
                      //value="Operador"
                      className={classes.radioSelect}
                      rules={{ required: true }}
                      defaultValue="Operador"
                    />
                  </FormControl>
                </Grid>

                {/* Sección de selección de estrategias */}
                {rol === "Operador" && (
                  <Grid item xs={12} md={6}>
                    <FormControl component="fieldset" required error={error}>
                      <FormLabel
                        component="legend"
                        className={classes.tituloElegibles}
                      >
                        Estrategias permitidas:
                      </FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              className={classes.checkboxes}
                              checked={estrategia1}
                              onChange={handleChangeEstrategias}
                              name="estrategia1"
                            />
                          }
                          label={
                            <Typography variant="body1">
                              Estrategia 1
                            </Typography>
                          }
                          style={{ paddingTop: 10 }}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              className={classes.checkboxes}
                              checked={estrategia2}
                              onChange={handleChangeEstrategias}
                              name="estrategia2"
                            />
                          }
                          label={
                            <Typography variant="body1">
                              Estrategia 2
                            </Typography>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="default"
                              className={classes.checkboxes}
                              checked={estrategia3}
                              onChange={handleChangeEstrategias}
                              name="estrategia3"
                            />
                          }
                          label={
                            <Typography variant="body1">
                              Estrategia 3
                            </Typography>
                          }
                        />
                      </FormGroup>
                      {error && (
                        <FormHelperText>
                          Elegir al menos una estrategia.
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                )}
              </Grid>
            </>
          ) : (
            <></>
          )}

          {/* Boton de guardado */}
          <Grid
            item
            style={{
              marginTop: 0,
              alignSelf: "center",
            }}
          >
            <ButtonLoading
            type="submit"
            size="large"
            isLoading={isLoading}
            className={classes.boton}
            >
              Crear usuario
            </ButtonLoading>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default CreateUser;
