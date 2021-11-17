import LayoutHome from "../layout/LayoutHome";

import Home from "../screens/home";
import Error404 from "../screens/error404";
import CreateUser from "../screens/create-user";
import EditUser from "../screens/edit-user";
import EditUserForm from "../screens/edit-user-form";
import PagosTarjeta from "screens/funciones-playa/pagos-tarjeta";


const routes = [
  {
    path: "/",
    component: LayoutHome,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/create-user",
        component: CreateUser,
        exact: true,
      },
      {
        path: "/edit-user",
        component: EditUser,
        exact: true,
      },
      {
        path: "/edit-user-form",
        component: EditUserForm,
        exact: true,
      },
      {
        path: "/funciones-playa/pagos-tarjeta",
        component: PagosTarjeta,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
