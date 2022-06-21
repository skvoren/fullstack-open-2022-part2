import React from 'react';

const Filter = ({value, onChangeValue}) => {

    const filterHandler = (event) => {
        onChangeValue(event.target.value)
    }

    return (
        <div>
            find countries<input value={value} onChange={filterHandler}/>
        </div>
    );
};

export default Filter;
