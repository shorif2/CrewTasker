import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import Features from "../pages/Features/Features";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: 'error page go back home',
      children: [
        {
        path: '/',
        element: <Home></Home>
        },
        {
          path: '/features',
          element: <Features></Features>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);




export default router;