import React from 'react'

import OneCountry from './OneCountry';
import ManyCountries from './ManyCountries';

const Country = ({countries, text, setCountries}) => {
    const filterItems = (arr, query) => {
        return arr.filter((el) => {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    }
    const name = countries.map(x => x.name);
    const common = name.map(x => x.common);
    const data1 = filterItems(common, text);
    console.log("name: ",name);
    console.log("common: ", common);
    console.log("data1: ", data1);
    if (data1.length > 10) {
        return (
            <>
                Too many matches, specify another filter
            </>
        );
    } else if (data1.length > 1) {
        return (
            <>
                <ManyCountries countries={data1} setCountries={setCountries}/>
            </>
        );
    } else if (data1.length === 1) {
        return (
            <>
                <OneCountry country={data1} countries={countries}/>
            </>
        )
    } else if (data1.length === 0) {
        return (
            <>
                No Results
            </>
        )
    } else {
        return ('');
    }
}
export default Country;