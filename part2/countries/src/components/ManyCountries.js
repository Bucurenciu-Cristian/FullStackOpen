import React from 'react'

const ManyCountries = ({countries, setCountries}) => {
    const handleClick = ({target}) => {
        setCountries(target.dataset.countries);
    };

    const map = countries.map(x => <tr key={x}>
        <td>{x}</td>
        <td>
            <button onClick={handleClick} data-countries={x}>Show</button>
        </td>
    </tr>);
    return (
        <table>
            <tbody>
            {map}
            </tbody>
        </table>
    )
};

export default ManyCountries;