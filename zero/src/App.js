import "./App.css";
import UseMemoCallback from "./pages/components/UseMemoCallback";
import UseRef from "./pages/components/UseRef";
import UseState from "./pages/components/UseState";

function App() {
    return (
        <div>
            <h1>Welcome my app</h1>
            <UseState />
            <UseRef />
            <UseMemoCallback />
        </div>
    );
}

export default App;
