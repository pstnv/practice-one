import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import GreetSpan from "./components/GreetSpan/GreetSpan";

function App() {
    const [greet, setGreet] = useState("");
    const sendGreet = (msg) => {
        setGreet(msg);
    };
    return (
        <div className="container">
            <header>
                <h1>Привет!</h1>
            </header>
            <main>
                <Form sendGreet={sendGreet} />
                <GreetSpan greet={greet} />
            </main>
        </div>
    );
}

export default App;
