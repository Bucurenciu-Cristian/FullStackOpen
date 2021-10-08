import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Country from './components/Country';

const App = () => {

    const [countries, setCountries] = useState([]);
    const [text, setText] = useState('')

    const hookCountries = () => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data);
            });
    };
    useEffect(hookCountries, []);

    const handleTextChange = ({target}) => setText(target.value);

    return (
        <div>
            <h1>Countries</h1>
            <div>
                find countries:
                <input
                    value={text}
                    onChange={handleTextChange}
                />
                <br/>
                <Country countries={countries} setCountries={setText} text={text}/>
            </div>
        </div>
    );

}

export default App

