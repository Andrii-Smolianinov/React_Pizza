import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./global.css";
import App from "./App";
import { store, persistor } from "./redux/store";

import Loader from "./components/Loader";
import "./18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
        <React.StrictMode>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
