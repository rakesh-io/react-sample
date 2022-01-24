import { useState } from "react";

export default function ButtonsProblem() {
    const [buttonCounter, setButtonCounter] = useState(0);
    const [lastButtonClicked, setLastButtonClicked] = useState(0);

    const getAllButtons = () => {
        let buttonsArray = [];
        for (let index = 1; index <= buttonCounter; index++) {
            buttonsArray.push(
                <button key={index} onClick={() => setLastButtonClicked(index)}> Button No - {index}</button>)
        }
        return buttonsArray;
    }

    return (
        <div>
            <h1>Buttons Counter: {buttonCounter}</h1>
            <h1>Last Button Clicked Counter: {lastButtonClicked}</h1>
            <button onClick={() => setButtonCounter(buttonCounter + 1)}>Add a button</button>
            { getAllButtons() }
        </div>
    )

}