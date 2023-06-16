import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from "./routes/root"
import ErrorPage from "./routes/error-page";
import Home from './routes/Home'
import Projects from './routes/Projects'
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import HeaderChild from './components/HeaderChild';
import FooterChild from './components/FooterChild';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: [<HeaderChild />, <ErrorPage  />, <FooterChild />],
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Portfolio-JM/",
        element: <Home />,
      },
      {
        path: "Home/",
        element: <Home />,
      },
      {
        path: "Projects/",
        element: <Projects />,
      },
      {
        path: "About/",
        element: <About />,
      },
      {
        path: "Projects/:id",
        element: <Project />,
      },
      {
        path:"Contact/",
        element:<Contact />
      },
      {
        path: "Error/",
        element: <ErrorPage />,
      },
    ],
  } 
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
