export default {
  apellido: {
    required: {
      value: true,
      message: "El campo Apellido es requerido",
    },
    pattern: {
      value: /^[a-z ñáéíóú]+$/i,
      message: "Apellido solo acepta letras.",
    },
  },
  nombre: {
    required: {
      value: true,
      message: "El campo Nombre es requerido",
    },
    pattern: {
      value: /^[a-z ñáéíóú]+$/i,
      message: "Nombre solo acepta letras.",
    },
  },
  email: {
    required: {
      value: true,
      message: "El campo Email es requerido",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{0,3}$/i,
      message: "Email inválido. Formato aaaa@bbb.ccc",
    },
  },
  usuario: {
    required: {
      value: true,
      message: "El campo Usuario es requerido",
    },
    minLength: {
      value: 3,
      message: "El usuario debe contener al menos 3 caracteres", // JS only: <p>error message</p> TS only support string
    },
  },
  password: {
    required: {
      value: true,
      message: "La Contraseña es requerida",
    },
    pattern: {
      value: /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])|(?=.*?\W).*$/,
      //   message:
      //     "La contraseña debe contener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un caracter especial. Ej: Orlando1$",
    },
    minLength: {
      value: 8,
      message: "La contraseña debe contener al menos 8 caracteres", // JS only: <p>error message</p> TS only support string
    },
  },
  passwordEdit: {
    // required: {
    //   value: false,
    //   message: "La Contraseña es requerida",
    // },
    pattern: {
      value: /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])|(?=.*?\W).*$/,
      //   message:
      //     "La contraseña debe contener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un caracter especial. Ej: Orlando1$",
    },
    minLength: {
      value: 8,
      message: "La contraseña debe contener al menos 8 caracteres", // JS only: <p>error message</p> TS only support string
    },
  },
  passwordConfirm: {
    required: {
      value: true,
      message: "La Confirmacion de Contraseña es requerida",
    },
    pattern: {
      value: /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])|(?=.*?\W).*$/,
      //   message:
      //     "La contraseña debe contener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un caracter especial. Ej: Orlando1$",
    },
    minLength: {
      value: 8,
      message:
        "La confirmacion de contraseña debe contener al menos 8 caracteres", // JS only: <p>error message</p> TS only support string
    },
  },
};
