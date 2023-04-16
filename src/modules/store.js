import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./app";
import {
    apiIdListReducer,
    datePickerReducer,
    categoryReducer,
    brandReducer,
    productReducer
} from './filterSlice';

export default configureStore({
    reducer: {
        app: appReducer,
        filter: combineReducers({
            apiIdListReducer,
            datePickerReducer,
            categoryReducer,
            brandReducer,
            productReducer
        })
    },
    devTools: true
});