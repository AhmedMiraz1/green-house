import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Apartment from "../pages/Apartment";



 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/apartment',
            element:<Apartment/>,
        }
    ]
  },
]);


