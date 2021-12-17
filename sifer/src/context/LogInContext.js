import { createContext, useState } from "react";


export const LogIn = createContext();

export const LogInProvider = (props) => {

 const [logged, setLogged] = useState(()=> {
    const val = localStorage.getItem('logeado');

    if (val === 'true') {
      return true;
    }else{
      return false;
    }
  });
  const value = {
    logged,
    activateLogged: (value) => {
      setLogged(value);
      localStorage.setItem('logeado', value);
    }
  }
  return (
    <LogIn.Provider value={value}>
      {props.children}
    </LogIn.Provider>
  );
};
