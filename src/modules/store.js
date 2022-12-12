/*
{
    apiIdList: [{
        name: "",
        attributeValue: ""
    }],
    datePicker: {
        value: {
            start: "date",
            end: "date"
        }
    },
    filters: {
        "date range": {
            categories: {
                all: [],
                current: "",
            },
            brands: {
                all: [],
                current: ""
            },
            products: {
                all: [],
                current: ""
            }
        },
        "date range": {
            categories: {
                all: [],
                current: "",
            },
            brands: {
                all: {
                    "categoryName": [],
                    "categoryName": []
                },
                current: ""
            },
            products: {
                all: {
                    "brandName": [],
                    "brandName": []
                },
                current: ""
            }
        }
    }
    plots: {
        "filters string": { result json }
    }
}
*/


import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
    apiIdListReducer,
    datePickerReducer,
    categoryReducer,
    brandReducer,
    productReducer
} from './filterSlice';

export default configureStore({
    reducer: {
        filter: combineReducers({
            apiIdListReducer,
            datePickerReducer,
            categoryReducer,
            brandReducer,
            productReducer
        })
        //plots: {}
    },
    devTools: true
});