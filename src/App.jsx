import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { StoreProvider } from "./store/provider";
import "./theme/variables.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail/:id",
    element: <Details />
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>
);