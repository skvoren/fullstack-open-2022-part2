import React from 'react';

const CountryLessData = ({country, onClickHandler}) => {
    return (
        <li>{country.name.common}<button onClick={onClickHandler}>show</button></li>
    );
};

export default CountryLessData;
