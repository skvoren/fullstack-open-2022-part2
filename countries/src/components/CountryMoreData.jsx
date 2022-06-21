import React from 'react';
import LanguagesList from "./LanguagesList";

const CountryMoreData = ({country}) => {
    console.log(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <LanguagesList languages={country.languages}/>
            <img src={country.flags.png} alt="flag"/>
        </div>
    );
};

export default CountryMoreData;
