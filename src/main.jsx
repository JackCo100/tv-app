import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./routes/root";
import Detail from './routes/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "detail",
    element: <Detail />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
