import { React, useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import EditUserFormStyles from "./EditUserFormStyles.js";
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
  /*  InputAdornment,
  IconButton, */
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import rules from "../../constants/rules";
import usuarioService from "services/usuario.service";
import AssignmentIndRoundedIcon from "@material-ui/icons/AssignmentIndRounded";
import ButtonLoading from "components/buttonLoading/ButtonLoading";

const EditUserForm = ({ location }) => {
  // Variables y Constantes
  const { email, user_metadata, given_name, name, family_name, nickname } =
    location.state;
  const [userData, setUserData] = useContext(UserContext);
  const [userRol, setUserRoles] = useState(
    userData?.usuario_data["http://localhost:3000/roles"]
  );
  const [rolElegido, setRolElegido] = useState(
    location.state.rol || "Operador"
  );
  const [estrategiasState, setEstrategiasState] = useState({
    estrategia1: user_metadata?.estrategias?.estrategia1,
    estrategia2: user_metadata?.estrategias?.estrategia2,
    estrategia3: user_metadata?.estrategias?.estrategia3,
  });
  const [sendValues, setSendValues] = useState({
    email,
    empresa: user_metadata.empresa,
    estrategias: user_metadata.estrategias,
    roles: user_metadata.roles,
    nombre: given_name ? given_name : name,
    apellido: family_name ? family_name : "",
    password: location.state.password ? location.state.password : "",
    usuario: nickname ? nickname : "",
    passwordConfirm: "",
  });
  const [isLoading, setIsLoadinng] = useState(false);

  const classes = EditUserFormStyles();
  let history = useHistory();

  //INICIO DECLARACIONES DE LIBRERIA ENCARGADA DE VALIDACIONES
  const { handleSubmit, errors, control, watch } = useForm();

  let password = watch("password", "");
  let passwordConfirm = watch("passwordConfirm", "");
  let rol = watch("Rol", user_metadata.roles);

  const handleChangeEstrategias = (event) => {
    setEstrategiasState({
      ...estrategiasState,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    setSendValues({ ...sendValues, roles: rol });
  }, [rol]);

  const { estrategia1, estrategia2, estrategia3 } = estrategiasState;
  const error =
    [estrategia1, estrategia2, estrategia3].filter((v) => v).length === 0;

  const handleChangeRolElegido = (event) => {
    setRolElegido(event.target.value);
    setSendValues({
      ...sendValues,
      rol: event.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    if (Object.values(estrategiasState).includes(true)) {
      if (sendValues.password === sendValues.passwordConfirm) {
        setDisabledButton(false);
      } else {
        setDisabledButton(true);
      }
    } else {
      setDisabledButton(true);
    }
  }, [sendValues, estrategiasState]);

  //FUNCION QUE SE EJECUTA CUANDO SE EDITA LOS CAMPOS DEL USUARIO
  const handleChangeData = (e) => {
    setSendValues({
      ...sendValues,
      [e.target.name]: e.target.value,
    });
  };

  //FUNCION QUE SE EJECUTA CUANDO SE HACE SUBMIT DEL FORM DE CREAR USUARIO
  const onSubmit = async (data) => {
    let sendData = data.rol ? data : { ...data, rol: sendValues.roles };
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
    try {
      setIsLoadinng(true);
      let id = location.state.identities[0].user_id;
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
        verify_email: false,
      };
      const res = await usuarioService.editUser(id, modifica3);
      console.log(res);
      if (res.status === 200) {
        setIsLoadinng(false);
        if (window.confirm("Modificacion exitosa")) {
          history.push("/edit-user");
        }
      }
    } catch (e) {
      console.log(e);
      setIsLoadinng(false);
    }
  };

  const lengthRight = password?.length > 7;
  function controlCharacters() {
    return (
      <div className={classes.textRule}>
        {lengthRight ? (
          <CheckIcon className={classes.iconCheck} />
        ) : (
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
    setSendValues({
      ...sendValues,
      estrategias: estrategiasState,
    });
  }, [estrategiasState]);

  return (
    <Container
      maxWidth="md"
      style={{ marginBottom: "2rem", marginTop: "7rem" }}
    >
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
            <AssignmentIndRoundedIcon
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
              Editar Usuario
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
                defaultValue={sendValues.nombre}
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
                defaultValue={sendValues.apellido}
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
                estrategia
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Controller
                name="email"
                control={control}
                defaultValue={sendValues.email}
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
                defaultValue={sendValues.usuario}
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
            {/* <Grid item xs={12} md={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={rules.passwordEditar}
                //validate ={(value) =>handleChangeData}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    id="password"
                    label="Nueva Contraseña"
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
            */}
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
                          //value={value}
                          //onChange={handleChangeRolElegido}
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
                      defaultValue={sendValues.roles}
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
                              defaultValue={estrategiasState.estrategia2}
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
                              defaultValue={estrategiasState.estrategia3}
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
              Editar usuario
            </ButtonLoading>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default EditUserForm;
