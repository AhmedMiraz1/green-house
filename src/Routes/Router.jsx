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
import AdminProfile from "../pages/AdminDashboard/AdminProfile";
import MakeAnnouncement from "../pages/AdminDashboard/MakeAnnouncement";
import MemberProfile from "../pages/memberDashboard/MemberProfile";
import AgreementRequests from "../pages/AdminDashboard/AgreementRequests";
import ManageCoupons from "../pages/AdminDashboard/ManageCoupons";
import MakePayment from "../pages/memberDashboard/MakePayment";
import MemberRoute from "./MemberRoute";
import Payment from "../pages/memberDashboard/Payment";
import PaymentHistory from "../pages/memberDashboard/PaymentHistory";

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
    errorElement: <ErrorPage />,
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

      //member routs

      {
        path: "member-profile",
        element: (
          <MemberRoute>
            <MemberProfile />
          </MemberRoute>
        ),
      },

      {
        path: "make-payment",
        element: (
          <MemberRoute>
            <MakePayment />
          </MemberRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <MemberRoute>
            <Payment />
          </MemberRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <MemberRoute>
            <PaymentHistory />
          </MemberRoute>
        ),
      },
      {
        path: "announcements",
        element: (
          <MemberRoute>
            <Announcements />
          </MemberRoute>
        ),
      },

      // admin route

      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <AdminRoute>
            <ManageMembers />
          </AdminRoute>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <AdminRoute>
            <MakeAnnouncement />
          </AdminRoute>
        ),
      },

      {
        path: "agreement-requests",
        element: (
          <AdminRoute>
            <AgreementRequests />
          </AdminRoute>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
    ],
  },
]);
