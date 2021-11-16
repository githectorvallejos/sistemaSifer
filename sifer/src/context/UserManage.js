import { createContext, useState } from "react";

export const UserManage = createContext();

export const UserManageProvider = (props) => {
  const [userFilter, setUserFilter] = useState([]);
  
  return (
    <UserManage.Provider value={[userFilter, setUserFilter]}>
      {props.children}
    </UserManage.Provider>
  );
};
