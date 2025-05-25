import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./routes/root";
import Result from './routes/results';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "results",
    element: <Result />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
