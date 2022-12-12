import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import store from '../modules/store';

const App = () => {
    const [clientId, setClientId] = useState(0);
    const [categories, setCategories] = useState();
    const [brands, setBrands] = useState();

    // useEffect(() => {
    //     initApp({ setClientId, setCategories, setBrands });
    // }, []);

    return <Provider store={store}><p>Hello</p></Provider>;
};

export default App;