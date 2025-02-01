import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { Layout } from "@/widgets/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: "ERROR 404",
  },
]);
