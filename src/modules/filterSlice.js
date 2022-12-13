import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import { initApp } from "./app";

const DATE_FORMAT = 'DD/MM/YYYY';

const apiIdListSlice = createSlice({
    name: "apiIdList",
    initialState: {
        all: [],
        selected: []
    },
    reducers: {
        fetchApiIdList: (state, action) => {
            state.all = action.payload;
        },
        selectApiId: (state, action) => {
            const itemId = action.payload;
            if(!state.selected.includes(itemId)) {
                state.selected.push(itemId);
            }
        },
        deselectApiId: (state, action) => {
            const newState = [];
            const itemId = action.payload;
            state.selected.forEach(el => {
                if (el !== itemId) {
                    newState.push(el);
                }
            })
            return newState;
        }
    }
});

const datePickerSlice = createSlice({
    name: "datePicker",
    initialState: {},
    reducers: {
        changeStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        changeEndDate: (state, action) => {
            state.endDate = action.payload
        }
    },
    extraReducers: builder => builder.addCase(initApp, () => ({
        startDate: dayjs().date(1).format(DATE_FORMAT),
        endDate: dayjs().date(dayjs().daysInMonth()).format(DATE_FORMAT)
    }))
});

const categorySlice = createSlice({
    name: "category",
    initialState: {},
    reducers: {}
});

const brandSlice = createSlice({
    name: "brand",
    initialState: {},
    reducers: {}
});

const productSlice = createSlice({
    name: "product",
    initialState: {},
    reducers: {}
});

export const { fetchApiIdList, selectApiId } = apiIdListSlice.actions;

export const { reducer: apiIdListReducer } = apiIdListSlice;
export const { reducer: datePickerReducer } = datePickerSlice;
export const { reducer: categoryReducer } = categorySlice;
export const { reducer: brandReducer } = brandSlice;
export const { reducer: productReducer } = productSlice;