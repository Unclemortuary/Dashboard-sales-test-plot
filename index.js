import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
    useEffect(() => {
        initApp();
    }, []);

    return <p>Hello</p>
};

const initApp = () => {

};

const root = createRoot(document.getElementById("root"));
root.render(<App/>);