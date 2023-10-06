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
                element: <Events />
            },
            {
                path: '/vanueList',
                element: <VanueList />
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
                element: <EventDetails />
            }
        ]
    }
]);

export default routes;