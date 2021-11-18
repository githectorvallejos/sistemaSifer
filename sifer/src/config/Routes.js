import LayoutHome from "../layout/LayoutHome";

import Home from "../screens/home";
import Error404 from "../screens/error404";
import CreateUser from "../screens/create-user";
import EditUser from "../screens/edit-user";
import EditUserForm from "../screens/edit-user-form";
import PagosTarjeta from "screens/funciones-playa/pagos-tarjeta";
import TurnoActual from "../screens/funciones-playa/turno-actual";
import NivelTanque from "screens/estado-producto/nivel-tanque";
import Surtidor from "screens/surtidores";
import IngresoCamion from "screens/estado-producto/ingreso-camion";


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
        path: "/funciones-playa/turno-actual",
        component: TurnoActual,
        exact: true,
      },
      {
        path: "/estado-producto/nivel-tanque",
        component: NivelTanque,
        exact: true,
      },
      {
        path: "/estado-producto/ingreso-camion",
        component: IngresoCamion,
        exact: true,
      },
      {
        path: "/surtidores",
        component: Surtidor,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
