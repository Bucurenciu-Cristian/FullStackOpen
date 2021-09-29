// function App() {
//     // let animals = [
//     //     {name: 'Amos', species: "dog", speed: 80},
//     //     {name: 'Bella', species: "cat", speed: 50},
//     //     {name: 'Atirra', species: "rabbit", speed: 150},
//     //     {name: 'Cucu', species: "dog", speed: 92}
//     // ];
//     // const isDog = (animal) => animal.species === 'dog';
//     // const dogs = animals.filter(isDog);
//     // // const otherAnimals = animals.reject(isDog);
//     // const names = animals.map((x) => x.name);
    const totalAmount = animals.reduce((sum, order) => sum + order.speed, 0);
    // const allNamesWithSpaces = animals.reduce((space, x) => space + " " + x.name, "");
    // // let output = animals
//     // //     .trim()
//     // //     .split("\n")
//     // //     .map(line => line.split("\t"))
//     // //     .reduce((customers,line) => {
//     // //         customers[line[0]] = customers[line[0]] || []
//     // //         customers[line[0]].push({
//     // //             name:line[1],
//     // //             price: line[2],
//     // //             quantity: line[3]
//     // //         })
//     // //         return customers;
//     // //     }, {});
//     //
//     //
//     // console.log(dogs);
//     // console.log(names);
//     // console.log(totalAmount);
//     // console.log(allNamesWithSpaces)
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                 </a>
//                 {names}
//                 <br/>
//                 {allNamesWithSpaces}
//                 <br/>
//                 {/*{output}*/}
//             </header>
//         </div>
//     );
// }
/*import {useState} from "react";

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)
const App = () => {
    const [value, setValue] = useState(10)
    const hello = (who) => () => console.log('hello', who)
    const setToValue = (newValue) => {
        setValue(0 + newValue)
    }
    const setValue1 = (x) => () => setValue(0 + x);

    return (
        <div>
            {value}
            <br/>
            {/!*<button onClick={hello('salut')}>Button cu functie in functie</button>*!/}
            {/!*<button onClick={hello()}>button</button>*!/}
            {/!*<button onClick={hello('react')}>button</button>*!/}
            {/!*<button onClick={hello('function')}>button</button>*!/}
            {/!*!/!*O varianta corecta deoarece pe onClick se pune referinta functiei arrow.*!/!*!/}
            {/!*<button onClick={() => setValue(0)}>Button cu referinta</button>*!/}
            {/!*<button onClick={() => setToValue(value + 1000)}>+1000</button>*!/}
            {/!*<button onClick={() => setToValue(value + 100)}>+100</button>*!/}
            {/!*<button onClick={() => setToValue(value + 10)}>+10</button>*!/}
            {/!*<button onClick={() => setToValue(value + 1)}>+1</button>*!/}
            <button onClick={setValue1(0)}>reset</button>
            <Button handleClick={setValue1(value + 1000)} text={"+1000"}/>
            <Button handleClick={setValue1(value + 100)} text={"+100"}/>
            <Button handleClick={setValue1(value + 10)} text={"+10"}/>
        </div>
    )
}*/
import React from 'react'
import Note from './components/Note';
const App = ({notes}) => {

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => <Note key={note.id} note={note}/>)}
            </ul>
        </div>
    );

}

export default App

