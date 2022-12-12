import { createSlice } from "@reduxjs/toolkit";

import { initApp } from "./app";

const apiIdListSlice = createSlice({
    name: "apiIdList",
    initialState: {
        all: {},
        current: {}
    },
    reducers: {
        fetchApiIdList: (state, action) => {
            // here I'm making an assumption that names and attribute values match by array index
            action.payload.attribute_value.forEach((id, index) => {
                state.all[id] = action.payload.name[index];
            });
        },
        selectApiId: (state, action) => {
            state.current = action.payload;
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
        startDate: Date.now(),
        endDate: "1234"
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