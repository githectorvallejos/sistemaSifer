import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import Credenciales from "../src/config/AuthCredentials";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={Credenciales.dominio}
      clientId={Credenciales.idCliente}
      redirectUri={window.location.origin}
      audience={Credenciales.audiencia}
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
