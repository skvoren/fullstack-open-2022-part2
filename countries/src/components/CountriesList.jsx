import React from 'react';
import CountryItem from "./CountryItem";

const CountriesList = ({data, isTooManyResults, isSingleResult}) => {
    return (
        <ul>
            {isTooManyResults
                ? "Too many matches, specify another filter"
                : data.map(country =>
                    <CountryItem key={country.name.common} country={country} isSingleResult={isSingleResult}/>)
                }
        </ul>
    );
};

export default CountriesList;
