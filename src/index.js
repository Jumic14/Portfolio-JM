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
import About from "./routes/About"
import Accomodation from "./routes/Accomodation"
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
        path: "Home/",
        element: <Home />,
      },
      {
        path: "About/",
        element: <About />,
      },
      {
        path: "Accomodation/:id",
        element: <Accomodation />,
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
