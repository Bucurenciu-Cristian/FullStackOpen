import React, {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>;
const Heading = ({text}) => <h1>{text}</h1>
const Button = (props) => {
    const {handleClick, text} = props;
    return (<button onClick={handleClick}>    {text}  </button>)
}
const History = (props) => {
    if (props.allClicks.length === 0) {
        return (<div> the app is used by pressing the buttons </div>)
    }
    return (<div> button press history: {props.allClicks.join(' ')}    </div>)
}


const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
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
    console.log()
    return (
        <table>
            <tbody>
            <StatisticLine text="good" value={props.good}/>
            <StatisticLine text="neutral" value={props.neutral}/>
            <StatisticLine text="bad" value={props.bad}/>
            <StatisticLine text="all" value={total}/>
            <StatisticLine text="average" value={average()}/>
            <tr>
                <td>positive</td>
                <td> {percentage(props.good, total)}%</td>
            </tr>
            </tbody>
        </table>
    );
};
const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    // const [allClicks, setAll] = useState([])
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // const handleLeftClick = () => {
    //     setAll(allClicks.concat('L'))
    //     setLeft(left + 1)
    // }

    // const handleRightClick = () => {
    //     setAll(allClicks.concat('R'))
    //     setRight(right + 1)
    // }
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