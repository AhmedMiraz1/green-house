import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Apartments from "../pages/apartment/Apartments";
import Dashboard from "../layout/Dashboard";
import ManageMembers from "../pages/AdminDashboard/ManageMembers";
import MyProfile from "../pages/useDashboard/MyProfile";
import Announcements from "../pages/useDashboard/Announcements";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "../Routes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: <Apartments />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //user route
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },

      // admin route
      {
        path: "manage-members",
        element: (
          <AdminRoute>
            <ManageMembers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
