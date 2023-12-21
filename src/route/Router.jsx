import {
    createBrowserRouter,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div >Crew Tasker website</div>,
      errorElement: 'error page go back home',
      children: [
        {

        }
      ]
    },
  ]);




export default router;