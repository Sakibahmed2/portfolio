import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store.js";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster richColors />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
