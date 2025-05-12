import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import Dashboard from "./layouts/Dashboard";
import GeneralLayout from "./layouts/GeneralLayout";
import Root from "./layouts/Root";

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
            path: "",
            element: <HomePage />,
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
