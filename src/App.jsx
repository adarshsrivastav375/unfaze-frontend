import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

import AdultTherapy from "./pages/AdultTherapy";
import TherapistPage from "./pages/TherapistPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/adult-therapy",
          element: <AdultTherapy />,
        },
        {
          path: "/therapists",
          element: <TherapistPage/>,
        },
        {
          path: "/blog",
          element: <h1>this is blog</h1>,
        },
        {
          path: "/contact-us",
          element: <h1>this is contact</h1>,
        },
        {
          path: "/join-team",
          element: <h1>this is blog</h1>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
