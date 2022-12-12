import { createAction } from '@reduxjs/toolkit';

import * as api from './api';

const CLIENT_ID = 30;

const loadInitialData = (handler, cancellationToken) => api.getClientApiId(CLIENT_ID, cancellationToken)
    .then(clientApiData => handler(clientApiData));

export const initApp = createAction('app/initApp');

export default loadInitialData;