import "@fontsource/sriracha";

import pMinDelay from "p-min-delay";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./component/Loading.tsx";

const loadingDelayTime = 1500 * 1;

const AppProvider = lazy(() =>
  pMinDelay(import("./AppProvider.tsx"), loadingDelayTime)
);
const App = lazy(() => pMinDelay(import("./App.tsx"), loadingDelayTime));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <AppProvider>
        <App />
      </AppProvider>
    </React.Suspense>
  </React.StrictMode>
);
