import Home from "../pages/Home";
import Login from "../pages/Login";
import Estadisticas from "../pages/Estadisticas";
import Historial from "../pages/Historial";
import Calculo from "../pages/Calculo";
import Registro from "../pages/Registro";


export let router = [ //se puede exportar arriba o abajo con export default//
    {
        path: '/',   //la ruta principal es el / solo, osea el home es la ruta principal//
        element: <Home />
    },

    {
        path: '/login',
        element:  <Login />
    },
    {
        path: '/estadisticas',
        element: <Estadisticas />
    },
    {
        path: '/historial',
        element: <Historial />
    },
    {
        path: '/calculo',
        element: <Calculo />
    },
    {
        path: '/registro',
        element: <Registro />
    },
    {
        path: '/home',
        element: <Home />
    },
    
]
