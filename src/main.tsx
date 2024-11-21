import "./index.css";

import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
