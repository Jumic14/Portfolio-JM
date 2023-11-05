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
import About from './routes/About'
import Works from './routes/Works'
import Certifications from "./routes/Certifications"
import Work from "./routes/Work"
import Contact from "./routes/Contact"
import HeaderChild from './components/HeaderChild';
import FooterChild from './components/FooterChild';
import Certificate from './routes/Certificate';
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
        path: "Works/",
        element: <Works />,
      },
      {
        path: "About/",
        element: <About />,
      },
      {
        path: "Certifications/",
        element: <Certifications />,
      },
      {
        path: "Certifications/:id",
        element: <Certificate />,
      },
      {
        path: "Works/:id",
        element: <Work />,
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
