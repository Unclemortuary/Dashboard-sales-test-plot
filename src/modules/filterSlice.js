import { createSlice, createAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import { DATE_FORMAT } from './constants';
import { initApp } from "./app";

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
    initialState: {
        all: [],
        selected: [],
        isLoading: false
    },
    reducers: {
        fetchCategories: (state, action) => {
            return { ...state, all: action.payload, selected: [], isLoading: false };
        },
        selectCategory: (state, action) => {
            const itemId = action.payload;
            if(!state.selected.includes(itemId)) {
                state.selected.push(itemId);
            }
        },
        deselectCategory: (state, action) => {
            const newState = [];
            const itemId = action.payload;
            state.selected.forEach(el => {
                if (el !== itemId) {
                    newState.push(el);
                }
            })
            return newState;
        }
    },
    extraReducers: builder => builder.addCase(startFetching, state => ({ ...state, isLoading: true, all: [], selected: [] }))
});

const brandSlice = createSlice({
    name: "brand",
    initialState: {
        all: [],
        selected: [],
        isLoading: false
    },
    reducers: {
        fetchBrands: (state, action) => {
            return { ...state, all: action.payload, selected: [], isLoading: false };
        },
        selectBrand: (state, action) => {
            const itemId = action.payload;
            if(!state.selected.includes(itemId)) {
                state.selected.push(itemId);
            }
        },
        deselectBrand: (state, action) => {
            const newState = [];
            const itemId = action.payload;
            state.selected.forEach(el => {
                if (el !== itemId) {
                    newState.push(el);
                }
            })
            return newState;
        }
    },
    extraReducers: builder => builder.addCase(startFetching, state => ({ ...state, isLoading: true, all: [], selected: [] }))
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        all: [],
        selected: []
    },
    reducers: {
        fetchProducts: (state, action) => {
            return { ...state, all: action.payload, selected: [], isLoading: false };
        },
        selectProduct: (state, action) => {
            const itemId = action.payload;
            if(!state.selected.includes(itemId)) {
                state.selected.push(itemId);
            }
        },
        deselectProduct: (state, action) => {
            const newState = [];
            const itemId = action.payload;
            state.selected.forEach(el => {
                if (el !== itemId) {
                    newState.push(el);
                }
            })
            return newState;
        }
    },
    extraReducers: builder => builder.addCase(startFetching, state => ({ ...state, isLoading: true, all: [], selected: [] }))
});

export const startFetching = createAction('filter/startFetching');
export const { fetchApiIdList, selectApiId } = apiIdListSlice.actions;
export const { fetchCategories, selectCategory, deselectCategory } = categorySlice.actions;
export const { fetchBrands, selectBrand, deselectBrand } = brandSlice.actions;
export const { fetchProducts, selectProduct, deselectProduct } = productSlice.actions;

export const { reducer: apiIdListReducer } = apiIdListSlice;
export const { reducer: datePickerReducer } = datePickerSlice;
export const { reducer: categoryReducer } = categorySlice;
export const { reducer: brandReducer } = brandSlice;
export const { reducer: productReducer } = productSlice;