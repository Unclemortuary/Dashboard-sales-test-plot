const getFilter = state => state.filter;

const getApiIdList = state => getFilter(state).apiIdListReducer;
export const getAllApiIds = state => getApiIdList(state).all;
export const getSelectedApiIds = state => getApiIdList(state).selected;
export const getApiIdsIsLoading = state => getApiIdList(state).isLoading;

const getCategory = state => getFilter(state).categoryReducer;
export const getAllCategories = state => getCategory(state).all;
export const getSelectedCategories = state => getCategory(state).selected;
export const getCategoriesIsLoading = state => getCategory(state).isLoading;

const getBrand = state => getFilter(state).brandReducer;
export const getAllBrands = state => getBrand(state).all;
export const getSelectedBrands = state => getBrand(state).selected;
export const getBrandsIsLoading = state => getBrand(state).isLoading;

const getProduct = state => getFilter(state).productReducer;
export const getAllProducts = state => getProduct(state).all;
export const getSelectedProducts = state => getProduct(state).selected;
export const getProductsIsLoading = state => getProduct(state).isLoading;