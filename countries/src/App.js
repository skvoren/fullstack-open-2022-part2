import React, {useEffect, useState} from 'react';
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
      axios
          .get("https://restcountries.com/v3.1/all")
          .then(response => {
            setCountries(response.data)
          })
    }, [])

    const countriesToShow = !filter
            ? []
            : countries.filter(country => country.name.common.includes(filter))

    const isTooManyResults = countriesToShow.length > 10

    const isSingleResult = countriesToShow.length === 1

    return (
        <div>
          <Filter value={filter} onChangeValue={setFilter}/>
          <CountriesList data={countriesToShow} isTooManyResults={isTooManyResults} isSingleResult={isSingleResult}/>
        </div>
    );
};

export default App;
