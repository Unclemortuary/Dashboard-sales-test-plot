/*
{
    apiIdList: {
        all: {
            "12345": "Ozon",
            "32425": "Avito"
        },
        current: "12345"
    },
    datePicker: {
        value: {
            start: "date",
            end: "date"
        }
    },
    filters: {
        "Ozon": {
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
        },
        "Avito": {
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
    },
    devTools: true
});