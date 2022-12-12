import { createSlice } from "@reduxjs/toolkit";

const apiIdListSlice = createSlice({
    name: "apiIdList",
    initialState: [],
    reducers: {
        fetchApiIdList: (state, action) => {
            const newState = [];
            // here I'm making an assumption that names and attribute values match by array index
            action.payload.name.forEach((name, index) => {
                newState.push({ name: name, attributeValue: action.payload.attribute_value[index] })
            });
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
    }
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

export const { reducer: apiIdListReducer } = apiIdListSlice;
export const { reducer: datePickerReducer } = datePickerSlice;
export const { reducer: categoryReducer } = categorySlice;
export const { reducer: brandReducer } = brandSlice;
export const { reducer: productReducer } = productSlice;