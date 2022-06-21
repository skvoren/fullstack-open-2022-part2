import React, {useState} from 'react';
import CountryMoreData from "./CountryMoreData";
import CountryLessData from "./CountryLessData";

const CountryItem = ({country, isSingleResult}) => {
    const [showMoreData, setShowMoreData] = useState(false)

    const showMoreDataHandler = () => {
        setShowMoreData(!showMoreData)
    }

    return (
        <div>
            {isSingleResult || showMoreData
            ? <CountryMoreData country={country}/>
            : <CountryLessData country={country} onClickHandler={showMoreDataHandler}/>
            }
        </div>
    );
};

export default CountryItem;
