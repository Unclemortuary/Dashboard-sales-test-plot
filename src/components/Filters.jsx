import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    getAllApiIds, getAllCategories, getAllBrands, getAllProducts,
    getApiIdsIsLoading, getCategoriesIsLoading, getBrandsIsLoading, getProductsIsLoading,
    getSelectedApiIds, getSelectedCategories, getSelectedBrands, getSelectedProducts } from '../modules/filterSelectors';
import { startFetching, fetchCategories, fetchBrands, fetchProducts,
    selectApiId, selectBrand, selectCategory, selectProduct,
    deselectCategory, deselectBrand, deselectProduct } from '../modules/filterSlice';
import { fetchFiltersData } from '../modules/filters';
import { Fallback } from './App';

import './filters.css';

const Filters = () => {
    const dispatch = useDispatch();

    const allApiIds = useSelector(getAllApiIds);
    const allCategories = useSelector(getAllCategories);
    const allBrands = useSelector(getAllBrands);
    const allProducts = useSelector(getAllProducts);

    const areApiIdsLoading = useSelector(getApiIdsIsLoading);
    const areCategoriesLoading = useSelector(getCategoriesIsLoading);
    const areBrandsLoading = useSelector(getBrandsIsLoading);
    const areProductsLoading = useSelector(getProductsIsLoading);

    const selectedApiId = useSelector(getSelectedApiIds);
    const selectedCategories = useSelector(getSelectedCategories);
    const selectedBrands = useSelector(getSelectedBrands);
    const selectedProducts = useSelector(getSelectedProducts);

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
                        placeholder={"Магазин"}
                        nameGetter={apiId => apiId.name}
                        idGetter={apiId => apiId.id}
                        options={allApiIds}
                        onSelect={selectApiId}
                        isLoading={areApiIdsLoading}/>
                    <Select placeholder={"Категория"} options={allCategories} onSelect={selectCategory} isLoading={areCategoriesLoading}/>
                    <Select placeholder={"Брэнд"} options={allBrands} onSelect={selectBrand} isLoading={areBrandsLoading}/>
                    <Select
                        placeholder={"Товар"}
                        options={allProducts}
                        onSelect={selectProduct}
                        multi
                        shouldStartLoading={selectedApiId.length > 0 && selectedCategories.length > 0 && selectedBrands.length > 0}
                        instructionText={"Выберите магазин, категорию и брэнд для того чтобы увидеть продукты"}
                        isLoading={areProductsLoading}/>
                </div>
        </div>
    );
};

const Select = ({ className, placeholder, options, onSelect, onDeselect, nameGetter, idGetter, multi, shouldStartLoading, instructionText, isLoading }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(multi ? [] : "");

    //const forDate = useSelector();
    // check for being outdated

    const onChange = e => {
        onSelect(e.target.value);
        if (multi) {
            setSelected(prevValue => prevValue.push(e.target.value))
        } else {
            setSelected(e.target.value);
        }
        setOpen(false);
    }

    return (
        <div className={`selectWrapper ${className}`}>
            <p className='selectName'>{selected ? (multi ? selected.reduce((acc, current) => acc += `${current} `, "") : selected) : placeholder}</p>
            <button onClick={() => setOpen(prevValue => !prevValue)}>{ open ? "close" : "open" }</button>
            <select 
                className='select'
                style={{ "display": open ? "block" : "none" }}
                size="6"
                multiple={multi}
                onChange={onChange}>
                { !shouldStartLoading && <option disabled>{instructionText}</option> }
                { (shouldStartLoading && isLoading) && <option disabled>Загрузка</option> }
                { options && options.map(option => 
                    nameGetter
                    ? <option key={idGetter(option)}>{nameGetter(option)}</option>
                    : <option key={option}>{option}</option>) }
                { shouldStartLoading && !isLoading && !options && <option disabled>Нет данных</option>}
            </select>
        </div>
    );
};

export default Filters;