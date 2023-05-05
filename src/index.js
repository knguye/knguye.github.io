import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";

import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import ActingProjects from "./routes/ActingProjects";
import FilmProjects from "./routes/FilmProjects";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Comedy from "./routes/Comedy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/acting",
        element: <ActingProjects/>,
      },
      {
        path: "/films",
        element: <FilmProjects/>
      },
      {
        path: "/comedy",
        element: <Comedy/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);