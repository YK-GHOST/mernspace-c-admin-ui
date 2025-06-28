import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import Dashboard from "./layouts/Dashboard";
import GeneralLayout from "./layouts/GeneralLayout";
import Root from "./layouts/Root";
import Users from "./pages/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/users",
            element: <Users />,
          },
        ],
      },
      {
        path: "/auth",
        element: <GeneralLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
