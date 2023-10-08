import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Regester from "../pages/Regester/Regester";
import EventDetails from "../pages/EventDetails/EventDetails";
import Events from "../pages/Events/Events";
import VanueList from "../pages/VanueList/VanueList";
import PrivateRoute from "../privateRoute/privateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/events',
                element: <PrivateRoute><Events /></PrivateRoute>,
                loader: () => fetch('/ourEvents.json')
            },
            {
                path: '/vanueList',
                element: <PrivateRoute><VanueList /></PrivateRoute>,
                loader: () => fetch('/vanues.json'),
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/regester',
                element: <Regester />
            },
            {
                path: '/eventDetails/:eventId',
                element: <PrivateRoute><EventDetails /></PrivateRoute>
            }
        ]
    }
]);

export default routes;