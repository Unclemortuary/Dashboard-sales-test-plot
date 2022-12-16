import * as api from './api';
import { apiIdListResponseMapper } from './mappers';

export const fetchFiltersData = (processors, apiIdsAndNames) => {
    const cancellationToken = new AbortController();
    const dateFrom = "2022-12-01";
    const dateTo = "2022-12-31";
    const apiIdList = apiIdListResponseMapper(apiIdsAndNames);

    const { categoriesProcessor, brandsProcessor } = processors;

    api.getCategories(categoriesProcessor, { apiIdList, dateFrom, dateTo }, cancellationToken.signal)
        .then(categoryNameList => api.getBrands(brandsProcessor, { apiIdList, categoryNameList, dateFrom, dateTo }, cancellationToken.signal));

    return cancellationToken;
};