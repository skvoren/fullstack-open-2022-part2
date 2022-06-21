import React from 'react';

const CountryLessData = ({country}) => {
    return (
        <li>{country.name.common}</li>
    );
};

export default CountryLessData;
