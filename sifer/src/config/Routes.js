import LayoutHome from "../layout/LayoutHome";

import Home from "../screens/home";
import Error404 from "../screens/error404";
import CreateUser from "../screens/create-user";
import EditUser from "../screens/edit-user";
import EditUserForm from "../screens/edit-user-form";
import PagosTarjeta from "screens/funciones-playa/pagos-tarjeta";
import NivelTanque from "screens/estado-producto/nivel-tanque";
import Surtidor from "screens/surtidores";
import IngresoCamion from "screens/estado-producto/ingreso-camion";
import TurnoActual from "screens/funciones-playa/turno-actual";
import GastosTurno from "screens/funciones-playa/gastos-turno";

import Login from "screens/login/iniciar-sesion";
import CuentasCorrientes from "screens/funciones-playa/cuentas-corrientes";


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
        path: "/login/iniciar-sesion",
        component: Login,
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
        path: "/funciones-playa/turno-actual",
        component: TurnoActual,
        exact: true,
      },
      {
        path: "/funciones-playa/gastos-turno",
        component: GastosTurno,
        exact: true,
      },
      {
        path: "/funciones-playa/cuentas-corrientes",
        component: CuentasCorrientes,
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
