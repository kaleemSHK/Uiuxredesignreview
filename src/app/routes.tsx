import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Incidents } from "./pages/Incidents";
import { Units } from "./pages/Units";
import { CallCenter } from "./pages/CallCenter";
import { Reports } from "./pages/Reports";
import { Analytics } from "./pages/Analytics";
import { Administration } from "./pages/Administration";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "incidents", Component: Incidents },
      { path: "units", Component: Units },
      { path: "call-center", Component: CallCenter },
      { path: "reports", Component: Reports },
      { path: "analytics", Component: Analytics },
      { path: "administration", Component: Administration },
    ],
  },
]);
