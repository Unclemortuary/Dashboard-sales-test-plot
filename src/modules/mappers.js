export const toClientRequestJSON = clientId => JSON.stringify({ client_id: clientId });
export const toCategoriesRequestJSON = ({ apiIdList, dateFrom, dateTo }) => JSON.stringify({
    api_id_list: apiIdList, date_from: dateFrom, date_to: dateTo });
export const toBrandsRequestJSON = ({ apiIdList, categoryNameList, dateFrom, dateTo }) => JSON.stringify({
    api_id_list: apiIdList, category_name_list: categoryNameList, date_from: dateFrom, date_to: dateTo });
export const toProductsRequestJSON = ({ apiIdList, categoryNameList, brandNameList, dateFrom, dateTo }) => JSON.stringify({
    api_id_list: apiIdList, category_name_list: categoryNameList, brand_name_list: brandNameList, date_from: dateFrom, date_to: dateTo });

export const apiIdListResponseMapper = apiIdListResponse => apiIdListResponse.map(apiId => apiId.attribute_value);
export const categoriesResponseMapper = categoriesResponse => categoriesResponse.map(category => category.category_name);
export const brandsResponseMapper = brandsResponse => brandsResponse.map(brand => brand.brand_name);
export const productsResponseMapper = productsResponse => productsResponse.map(product => product.sku_name);