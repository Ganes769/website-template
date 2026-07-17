import {
  createBrowserRouter
} from "react-router-dom";
import HomePage from 'pages/home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <></>,
  },
  {
    path: "/company-info",
    element: <></>,
  },
  {
    path: "/academy",
    element: <></>,
  },
  {
    path: "/contact",
    element: <></>,
  },
]);