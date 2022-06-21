import React from 'react';
import CountryMoreData from "./CountryMoreData";
import CountryLessData from "./CountryLessData";

const CountryItem = ({country, isSingleResult}) => {
    return (
        <div>
            {isSingleResult
            ? <CountryMoreData country={country}/>
            : <CountryLessData country={country}/>
            }
        </div>
    );
};

export default CountryItem;
