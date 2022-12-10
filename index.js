import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';

import * as api from './api';

const App = () => {
    const [clientId, setClientId] = useState(0);
    const [categories, setCategories] = useState();
    const [brands, setBrands] = useState();

    useEffect(() => {
        initApp({ setClientId, setCategories, setBrands });
    }, []);

    return <p>Hello</p>
};

const initApp = ({ setClientId, setCategories, setBrands }) => {
    const CLIENT_ID = 32;
    const handler = (data) => console.log(data);
    const clientApiId = api.getClientApiId(handler, CLIENT_ID);
};

const root = createRoot(document.getElementById("root"));
root.render(<App/>);