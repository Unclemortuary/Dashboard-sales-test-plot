import { createSlice, createAction } from '@reduxjs/toolkit';

import { CLIENT_ID } from './constants';
import * as api from './api';

const loadInitialData = (handler, cancellationToken) => api.getClientApiId(CLIENT_ID, cancellationToken)
    .then(clientApiData => handler(clientApiData));

export const initApp = createAction('app/initApp');

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isReady: false
    },
    extraReducers: builder => builder.addCase(initApp, (state) => ({ ...state, isReady: true }))
});

export const { reducer: appReducer } = appSlice;

export const isReady = (state) => state.app.isReady;

export default loadInitialData;