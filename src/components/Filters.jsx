import React, { useRef, useState } from 'react';

import './filters.css';

const Filters = () => {
    return (
        <div className="filtersContainer">
                <div className='datePickerContainer'>
                    <label htmlFor="fromDate">От</label>
                    <input id="fromDate" type="date"/>
                    <label htmlFor="toDate">До</label>
                    <input id="toDate" type="date"/>
                </div>
                <button className='apply'>Применить</button>
                <div className='selects'>
                    <Select name="api_id" placeholder="Магазин"></Select>
                    <Select name="category" placeholder="Категория"></Select>
                    <Select name="brand" placeholder="Брэнд"></Select>
                    <Select name="product" placeholder="Товар"></Select>
                </div>        
        </div>
    );
};

const Select = ({ name, placeholder, isLoading }) => {
    const [open, setOpen] = useState(false);
    const mainRef = useRef();
    return (
        <div className='selectWrapper'>
            <p className='selectName'>{placeholder}</p>
            <button onClick={() => setOpen(prevValue => !prevValue)}>Arrow</button>
            <select className='select' style={{ "display": open ? "block" : "none" }} ref={mainRef} name={name} multiple={true}>
                <option value="ipsum">Ipsum</option>
            </select>
        </div>
    );
}

export default Filters;