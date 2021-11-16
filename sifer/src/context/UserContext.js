import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const defaultValue = JSON.parse(localStorage.getItem("session")) || {
    usuario_data: "",
    user_token:"",
    usuario_metadata: "",
  };

  const [user, setUser] = useState(defaultValue);
  
  return (
    <UserContext.Provider value={[user, setUser, defaultValue]}>
      {props.children}
    </UserContext.Provider>
  );
};
