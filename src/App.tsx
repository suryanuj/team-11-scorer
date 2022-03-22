import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    const [count1, setCount1] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);
    const [count3, setCount3] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <p>Welcome!</p>
                <Button onClick={() => setCount1(1 + count1)}>Add One</Button>
                to {count1}.
                <Button onClick={() => setCount1(count1 - 1)}>
                    Subtract One
                </Button>
                to {count1}.
                <Button onClick={() => setCount2(2 + count2)}>Add Two</Button>
                to {count2}.
                <Button onClick={() => setCount3(3 + count3)}>Add Three</Button>
                to {count3}.
            </p>
        </div>
    );
}

export default App;
