import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import loadInitialData, { initApp } from "../modules/app";
import { fetchApiIdList } from "../modules/filterSlice";

const App = () => {
    const dispatch = useDispatch();
    const initialDataHandler = (data) => dispatch(fetchApiIdList(data));
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        loadInitialData(initialDataHandler, signal);

        return () => abortController.abort();
    }, []);

    return <p>Hello</p>;
};

export default App;