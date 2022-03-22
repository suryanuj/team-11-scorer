import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { Counter } from "./Components/Counter";

function App(): JSX.Element {
    const [count1, setCount1] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <p>Welcome!</p>
                {count1}
                <br></br>
                <Counter val={1} hook={[count1, setCount1]}></Counter>
                <Counter val={-1} hook={[count1, setCount1]}></Counter>
                <br></br>
                <Counter val={2} hook={null}></Counter>
                <br></br>
                <Counter val={3} hook={null}></Counter>
            </div>
        </div>
    );
}

export default App;
