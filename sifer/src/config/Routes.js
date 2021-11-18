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
import PlanillaTurno from "screens/funciones-playa/planilla-turno";
import BuzonDinero from "screens/funciones-playa/buzon-dinero";
import CierreParcial from "screens/rendiciones-turno/cierre-parcial";
import TotalesParciales from "screens/rendiciones-turno/totales-parciales";


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
        path: "/funciones-playa/planilla-turno",
        component: PlanillaTurno,
        exact: true,
      },
      {
        path: "/funciones-playa/buzon-dinero",
        component: BuzonDinero,
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
        path: "/rendiciones-turno/cierre-parcial",
        component: CierreParcial,
        exact: true,
      },
      {
        path: "/rendiciones-turno/totales-parciales",
        component: TotalesParciales,
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
