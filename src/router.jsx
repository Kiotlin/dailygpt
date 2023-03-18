import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import * as DailyApps from "./app";
import meta from "./app/app";
import React from "react";

const { ...apps } = DailyApps;
const appRoutes = Object.values(apps).map((a) => {
  const folderName = meta.app.find((i) => i.settings.function === a.name).settings
    .folder;
  return { path: `/${folderName}`, element: React.createElement(a, {}) };
});

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      ...appRoutes
    ],
  },
]);
