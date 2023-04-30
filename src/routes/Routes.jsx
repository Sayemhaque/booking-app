import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Resgister from "../pages/Resgister";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path:"/",
        element : <App/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"destination",
                element: <Destination/>
            },
            {
                path:"register",
                element: <Resgister/>
            },
            {
                path:"login",
                element: <Login/>
            }
        ]
    }
])


export default router;