import { 
    toClientRequestJSON,
    toCategoriesRequestJSON,
    toBrandsRequestJSON,
    toProductsRequestJSON,
    categoriesResponseMapper,
    brandsResponseMapper,
    productsResponseMapper
 } from "./mappers";

const BASE_URL = 'https://apps1.ecomru.ru';
const BASE_PORT = 4441;
const FILTER_URL_PREFIX = 'api/v1/dashboard_sales_filter';

export const getClientApiId = (params, cancellationToken) => new Promise((resolve, reject) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/client`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    signal: cancellationToken,
    body: toClientRequestJSON(params)
}).then(response => response.json().then(data => resolve(data))))
.catch(err => {
    console.log(`client api id request error ${err}`);
});

export const getCategories = (responseHandler, params, cancellationToken) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/category`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    signal: cancellationToken,
    body: toCategoriesRequestJSON(params)
}).then(response => response.json().then(data => {
    const mapped = categoriesResponseMapper(data);
    responseHandler(mapped);
    return mapped;
})).catch(err => {
    console.log(`categories request error ${err}`);
});

export const getBrands = (responseHandler, params, cancellationToken) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/brand`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    signal: cancellationToken,
    body: toBrandsRequestJSON(params)
}).then(response => response.json().then(data => {
    const mapped = brandsResponseMapper(data);
    responseHandler(mapped);
    return mapped;
})).catch(err => {
    console.log(`brands request error ${err}`);
});

export const getProducts = (responseHandler, params, cancellationToken) => fetch(`${BASE_URL}:${BASE_PORT}/${FILTER_URL_PREFIX}/products`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    signal: cancellationToken,
    body: toProductsRequestJSON(params)
}).then(response => response.json().then(data => {
    const mapped = productsResponseMapper(data);
    responseHandler(mapped);
    return mapped;
})).catch(err => {
    console.log(`products request error ${err}`);
});