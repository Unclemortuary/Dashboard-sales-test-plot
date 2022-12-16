import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    getAllApiIds,
    getAllCategories,
    getAllBrands,
    getAllProducts } from '../modules/filterSelectors';
import { startFetching, fetchCategories, fetchBrands, fetchProducts,
    selectApiId, selectBrand, selectCategory, selectProduct,
    deselectCategory, deselectBrand, deselectProduct } from '../modules/filterSlice';
import { fetchFiltersData } from '../modules/filters';

import './filters.css';

const Filters = () => {
    const dispatch = useDispatch();
    const allApiIds = useSelector(getAllApiIds);
    const allCategories = useSelector(getAllCategories);
    const allBrands = useSelector(getAllBrands);
    const allProducts = useSelector(getAllProducts);

    const categoriesProcessor = categories => dispatch(fetchCategories(categories));
    const brandsProcessor = brands => dispatch(fetchBrands(brands));
    const productsProcessor = products => dispatch(fetchProducts(products));

    useEffect(() => {
        dispatch(startFetching());
        const abortController = fetchFiltersData({ categoriesProcessor, brandsProcessor, productsProcessor }, allApiIds);
        
        return () => abortController.abort();
    }, []);

    return (
        <div className="filtersContainer">
            <div className="datePickers">
                <div className="datePickerContainer datePickerFrom">
                    <label htmlFor="fromDate">От</label>
                    <input id="fromDate" type="date"/>
                </div>
                <div className='datePickerContainer datePickerTo'>
                    <label htmlFor="toDate">До</label>
                    <input id="toDate" type="date"/>
                </div>
                <button className="apply">Применить</button>
            </div>
                <div className="selects">
                    <Select
                        className="apiIdFilter"
                        placeholder="Магазин"
                        nameGetter={apiId => apiId.name}
                        idGetter={apiId => apiId.attribute_value}
                        options={allApiIds}/>
                    <Select
                        className="categoryFilter"
                        placeholder="Категория"
                        options={allCategories}/>
                    <Select
                        className="brandFilter"
                        placeholder="Брэнд"
                        options={allBrands}/>
                    <Select
                        className="productFilter"
                        placeholder="Товар"
                        options={allProducts}
                        multi/>
                </div>
        </div>
    );
};

const Select = ({ className, placeholder, options, nameGetter, idGetter, multi, isLoading }) => {
    const [open, setOpen] = useState(false);
    const mainRef = useRef();
    return (
        <div className={`selectWrapper ${className}`}>
            <p className='selectName'>{placeholder}</p>
            <button onClick={() => setOpen(prevValue => !prevValue)}>{ open ? "close" : "open" }</button>
            <select className='select' style={{ "display": open ? "block" : "none" }} size="6" ref={mainRef} multiple={multi}>
                { options && options.map(option => 
                    nameGetter
                    ? <option key={idGetter(option)}>{nameGetter(option)}</option>
                    : <option key={option}>{option}</option>) }
            </select>
        </div>
    );
}

export default Filters;