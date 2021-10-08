import axios from "axios";
import React, {useState, useEffect} from 'react'

const OneCountry = ({country, countries}) => {
    const [oneCountry, setOneCountry] = useState({});
    const text = countries.filter(x => x.name.common === country[0]);
    const capital = text.map(x => x.capital);
    const newVar = x => {
        const callbackfn = x => <li key={x}>{x}</li>;
        return Object.values(x.languages).map(callbackfn);
    };
    const hookOneCountry = () => {
        const api_key = process.env.REACT_APP_API_KEY

        // axios
        //     .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}&units=m`)
        //     .then(response => {
        //         setOneCountry(response.data);
        //     });
    };
    // useEffect(hookOneCountry, []);
    let strings = oneCountry.current;
    if (strings === undefined) {
        strings = {temperature: "Api isn't connected", pressure: "Api isn't connected", weather_icons: ['#']}
    }
    return (<>
            <h2>{text.map(x => x.name.common)}</h2>
            <div>
                capital: {capital} <br/>
                population: {text.map(x => x.population)} <br/>
            </div>
            <h3>
                Languages
                <ul>
                    {text.map(newVar)}
                </ul>
            </h3>
            <img src={text.map(x => x.flags.png)} width="300px" alt=""/>

            <h2>Weather in {capital}</h2>
            <div>

                temperature: {strings.temperature} Celsius <br/>
                <img src={strings.weather_icons[0]} width="30px" alt=""/><br/>
                pressure: {strings.pressure} bar <br/>

            </div>
        </>
    );
};
export default OneCountry;