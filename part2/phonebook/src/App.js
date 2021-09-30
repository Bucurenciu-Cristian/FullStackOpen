import React, {useState} from 'react'

const Person = ({text, number}) => <li>{text} {number}</li>

const Filter = ({handleFilterChange}) => {
    return (
        <>
            filter shown with <input onChange={handleFilterChange}/>
        </>
    );
};
const PersonForm = ({addPersons, newName, handleNameChange, newNumber, handleNumberChange}) => {

    return (<form onSubmit={addPersons}>
        <div>
            name: <input value={newName} onChange={handleNameChange} required/><br/>
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} required/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>);
};
const Persons = ({persons}) => {
    return (
        <ol>
            {persons.map(x => <Person key={x.id} text={x.name} number={x.number}/>)}
        </ol>
    );
}
const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4},
        {name: 'Tata', number: '0732538770', id: 5},
        {name: 'Mama', number: '0770427247', id: 6},
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');
    const handleNameChange = ({target}) => setNewName(target.value);
    const handleNumberChange = ({target}) => setNewNumber(target.value);
    const handleFilterChange = ({target}) => setFilterName(target.value);
    const filterItems = (arr, query) => {
        return arr.filter((el) => {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    }
    const array = persons.map(x => x.name);
    const data = filterItems(array, filterName);
    data.forEach((x, i) => console.log(i, x));
    console.log(typeof data);
    const text17 = persons.filter(x => x.name);
    console.log(text17);
    let romNumbers = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    const filteredByKey =
        Object.fromEntries(
            Object.entries(romNumbers)
                .filter(([key, value]) => key === 'I'))
    const filteredByValue =
        Object.fromEntries(
            Object.entries(romNumbers)
                .filter(([key, value]) => value === 1000))
    console.log(filteredByValue);
    // filteredByValue = {V: 5}

    // persons.forEach((x, i) => x.filter());
    // console.log(persons.find())
    // const test = persons.filter(item => item.name === data.map(x=>x))
    // console.log(test, data);
    const addPersons = (e) => {
        e.preventDefault();

        const personObj = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }

        const filter = persons.filter(x => x.name === newName);
        if (filter.length === 0) {
            setPersons(persons.concat(personObj));
            setNewName('');
            setNewNumber('');
        } else {
            alert(`${newName} is already added to phonebook`);
        }

    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilterChange={handleFilterChange}/>
            <h3>Add a new contact</h3>
            <h4>input result: {filterName}</h4>
            <PersonForm
                addPersons={addPersons}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                newName={newName}
                newNumber={newNumber}
            />
            <h3>Numbers</h3>
            <Persons persons={persons}/>
        </div>
    );
}

export default App