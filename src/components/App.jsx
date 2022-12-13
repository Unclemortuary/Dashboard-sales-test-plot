import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import loadInitialData, { initApp } from "../modules/app";
import { fetchApiIdList } from "../modules/filterSlice";

import Filters from "./Filters";
import Plot from "./Plot";

import './app.css';

const App = () => {
    const dispatch = useDispatch();
    const initialDataHandler = (data) => dispatch(fetchApiIdList(data));
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        loadInitialData(initialDataHandler, signal).then(() => dispatch(initApp()));

        return () => abortController.abort();
    }, []);

    return (
        <div className="container">
            <Filters/>
            <Plot/>
        </div>
    );
};

export const Fallback = () => <h3>Loading...</h3>;

export default App;

// UI rendering flow:
// 1. Fetch api ids (while fetching everything is under a mask)
// 2. Start fetching categories, then brands, then products (while fetching opening corresponding filter will show a mask)
//    (date picker is set to default range this month)
//    Plot area says - please specify filters to draw a plot
// 3. When user select at least one item from EACH filter - fetch plot data, while fetching show mask in plot area

// IF user changes filters before previous plot request finishes - cancel request
// IF user changes dates in date picker before all filter requests are finished - cancel those request and start new one for new dates