import { useContext } from "react";
import axios from "./axios.config";
// const axios = require('axios');

class UsuarioService {
  getUsers() {
    /**
     * @return (void) devuelve lista de usuarios
     */
    return axios.get(`/api/obtener-usuarios`);
  }
  
  createUser(data){
        /**
     * @params {definir objeto}
     * @return (void) mensaje de confirmacion de creacion de usuario
     */
    return axios.post('/api/registrar-usuario',data)
  }

  editUser(id, data){
    /**
 * @params {definir objeto}
 * @return (void) mensaje de confirmacion de creacion de usuario
 */
return axios.patch(`/api/actualizar-usuario/${id}`,data)
}
}

export default new UsuarioService();
