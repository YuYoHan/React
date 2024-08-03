import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Editor from "./components/Editor";
import Header from "./components/Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header />
            <Editor />
            <List />
        </div>
    );
}

export default App;
