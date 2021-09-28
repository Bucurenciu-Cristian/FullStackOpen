import React, {useState} from 'react'

const Button = (props) => {
    const {handleClick, text} = props;
    return (<button onClick={handleClick}>    {text}  </button>)
}
const Heading = ({text}) => <h1>{text}</h1>
const TopAnecdotes = (props) => {
    let max = 0;
    let index = 0;
    props.arrayAnecdotes.forEach((x, i) => {
        if (max < x) {
            max = x;
            index = i;
        }
    });
    return (
        <div>
            {props.anecdote[index]}
        </div>
    );
};
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    let [selected, setSelected] = useState(0)
    const initial_state = new Array(anecdotes.length).fill(0);
    const [points, setVote] = useState(initial_state);
    const copy = [...points]
    const handleSelected = () => setSelected(Math.floor(Math.random() * 7));

    const handleVote = () => {
        copy[selected] += 1;
        return (
            setVote(copy)
        );
    }
    return (
        <div>
            <Heading text={"Anecdote of the day"}/>
            <p>{anecdotes[selected]}</p>
            <Button handleClick={handleVote} text='vote'/>
            <Button handleClick={handleSelected} text='next anecdote'/>
            <p>has {copy[selected]} votes</p>
            <Heading text={"Anecdote with most votes"}/>
            <TopAnecdotes anecdote={anecdotes} selected={selected} arrayAnecdotes={copy}/>
        </div>
    )
}

export default App