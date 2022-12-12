const BASE_URL = 'http://62.84.124.35';
const BASE_PORT = 5051;
const FILTER_URL_PREFIX = 'api/v1/dashboard_filter';

export const getClientApiId = (responseHandler, params) => new Promise((resolve, reject) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/client`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: toClientRequestJSON(params)
}).then(response => response.json().then(data => responseHandler(data.attribute_value)))); 

export const getCategories = (responseHandler, params) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/categories`, {
    body: toCategoriesRequestJSON(params)
}).then(response => responseHandler(response));

export const getBrands = (responseHandler, params) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/brand`, {
    body: toBrandsRequestJSON(params)
}).then(response => responseHandler(response));

export const getProducts = (responseHandler, params) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/products`, {
    body: toProductsRequestJSON(params)
}).then(response => responseHandler(response));



const toClientRequestJSON = clientId => JSON.stringify({ client_id: clientId });
const toCategoriesRequestJSON = ({ apiIdList, dateFrom, dateTo }) => JSON.stringify({ 
    api_id_list: [apiIdList], date_from: dateFrom, date_to: dateTo });
const toBrandsRequestJSON = ({ apiIdList, categoryIdList, dateFrom, dateTo }) => JSON.stringify({ 
    api_id_list: [apiIdList], category_name_list: [categoryIdList], date_from: dateFrom, date_to: dateTo });
const toProductsRequestJSON = ({ apiIdList, categoryIdList, brandNameList, dateFrom, dateTo }) => JSON.stringify({ 
    api_id_list: [apiIdList], category_name_list: [categoryIdList], brand_name_list: [brandNameList], date_from: dateFrom, date_to: dateTo });

// 155597