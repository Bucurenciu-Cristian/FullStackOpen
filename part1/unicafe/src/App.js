import React, {useState} from 'react'

const Heading = ({text}) => <h1>{text}</h1>
const Button = (props) => {
    const {handleClick, text} = props;
    return (<button onClick={handleClick}>    {text}  </button>)
}


const StatisticLine = ({text, value, percent}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}{percent}</td>
        </tr>
    );
};
const Statistics = (props) => {
    const percentage = (partialValue, totalValue) => {
        return (100 * partialValue) / totalValue;
    };
    const total = props.good + props.bad + props.neutral;
    const average = () => {
        return ((props.good) + (props.bad * (-1))) / total;
    };
    if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (<div>No feedback given</div>);
    }
    return (
        <table>
            <tbody>
            <StatisticLine text="good" value={props.good}/>
            <StatisticLine text="neutral" value={props.neutral}/>
            <StatisticLine text="bad" value={props.bad}/>
            <StatisticLine text="all" value={total}/>
            <StatisticLine text="average" value={average()}/>
            <StatisticLine text="positive" value={percentage(props.good, total)} percent={"%"}/>
            </tbody>
        </table>
    );
};
const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const handleGoodClick = () => {
        setGood(good + 1);
    };
    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    };
    const handleBadClick = () => {
        setBad(bad + 1);
    };


    return (
        <>
            <Heading text={"give feedback"}/>
            <Button handleClick={handleGoodClick} text='good'/>
            <Button handleClick={handleNeutralClick} text='neutral'/>
            <Button handleClick={handleBadClick} text='bad'/>
            <Heading text={"statistics"}/>
            <Statistics good={good} bad={bad} neutral={neutral}/>

        </>
    )
}

export default App