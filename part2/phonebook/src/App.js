import React, {useState, useEffect} from 'react';
import service from './services/PersonServices'

const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    const errorStyle = {
        color: 'green',
        background: 'lightgrey',
        fontStyle: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    };

    const style = {...errorStyle, color: 'blue',background:'aqua'}
    const anotherStyle = {...style, color: 'red', background: 'pink'}
    if (message.search("Added") !== -1) {
        return (
            <div style={style}>
                {message}
            </div>
        )
    }else if (message.search("deleted") !== -1) {
        return (
            <div style={anotherStyle}>
                {message}
            </div>
        )
    } else {
        return (
            <div style={errorStyle}>
                {message}
            </div>
        );
    }
}
const Person = ({text, number, id, deleteButton}) => {
    return (
        <li>{text} {number}
            <DeleteButton
                id={id}
                deleteButton={deleteButton}
            />
        </li>
    );
}
const DeleteButton = ({id, deleteButton}) => {

    return (<button onClick={() => deleteButton(id)}>Delete</button>);

};
const Filter = ({handleFilterChange, filterName}) => {
    return (
        <>
            filter shown with <input value={filterName} onChange={handleFilterChange}/>
        </>
    );
};
const PersonForm = ({addPersons, newName, handleNameChange, newNumber, handleNumberChange}) => {

    return (<form onSubmit={addPersons}>
        <div>
            name: <input value={newName} onChange={handleNameChange} required/><br/>
        </div>
        <div>
            number: <input type="tel" value={newNumber} onChange={handleNumberChange} required/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>);
};
const Persons = ({persons, filterName, deleteButton}) => {
    const filterItems = (arr, query) => {
        return arr.filter((el) => {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    }
    const array = persons.map(x => x.name);
    const data123 = filterItems(array, filterName);
    let Callback = (x) => {
        if (data123.includes(x.name)) return x.name
    };
    let bye = persons.filter(Callback)
    return (
        <ol>
            {bye.map(x =>
                <Person
                    key={x.id}
                    id={x.id}
                    text={x.name}
                    number={x.number}
                    deleteButton={deleteButton}
                />)
            }
        </ol>
    );
}
const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('');
    const [filterName, setFilterName] = useState('');
    const [errorMessage, setErrorMessage] = useState(null)

    const addPersons = (e) => {
        e.preventDefault();

        const personObj = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }

        const filter = persons.filter(x => x.name === newName);
        if (filter.length === 0) {
            service
                .create(personObj)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson));
                    setNewName('');
                    setNewNumber('');
                    setErrorMessage(`Added '${returnedPerson.name}'`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
        } else {
            const result = window.confirm(`${filter[0].name} is already added to phonebook,replace the old number with a new one?`)
            if (result) {
                const id = filter[0].id;
                const PersonObj = persons.find(n => n.id === id)
                const updatePersonObj = {...PersonObj, number: newNumber};
                service
                    .update(id, updatePersonObj)
                    .then(response => {
                        setPersons(
                            persons
                                .map(person => person.id !== id ? person : response)
                        )
                        setErrorMessage(`Updated '${updatePersonObj.name}' to ${updatePersonObj.number}`)
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)

                    })
                    .catch(error => {

                        setPersons(persons
                            .filter(n => n.id !== id)
                        );
                    });
            }
        }
    };
    const hook = () => {
        service
            .getAll()
            .then(persons =>
                setPersons(persons)
            )
    };
    useEffect(hook, []);

    const handleNameChange = ({target}) => setNewName(target.value);
    const handleNumberChange = ({target}) => setNewNumber(target.value);
    const handleFilterChange = ({target}) => setFilterName(target.value);
    const handleDeleteButton = (id) => {

        const result = window.confirm("Do you really want to delete this entry?")
        if (result) {
            service
                .deleting(id)
                .then(id => {
                    setPersons(persons.filter(person => person.id !== id))
                })
                .catch(error => {
                    setErrorMessage(`This entry was already deleted`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                    setPersons(persons.filter(n => n.id !== id))
                })
        }

    };


    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={errorMessage}/>
            <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
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
            <Persons
                persons={persons}
                setPersons={setPersons}
                filterName={filterName}
                deleteButton={handleDeleteButton}
            />
        </div>
    );
}

export default App