import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import App from "./src/components/App";
import store from './src/modules/store';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);