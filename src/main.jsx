import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LearnMore from "./LearnMore.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/aarontam/",
    element: <App />,
  },
  {
    path: "/aarontam/learnmore/:project",
    element: <LearnMore />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
