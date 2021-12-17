import React, { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = (props) => {
  let token = "";
  if (localStorage.getItem("logeado")) {
    console.log("tokennn", localStorage.getItem("logeado"));
  }

  const defaultValue = {
    user_id: "",
          user_name: "",
          user_email: "",
          user_rol: "",
          user_nombreRol: "",
  };

  const [user, setUser] = useState(defaultValue);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
