import "./App.css";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
    const buttonProps = {
        text: "메일",
        color: "red",
    };
    return (
        <>
            <Button {...buttonProps} />
            <Button text={"카페"} />
            <Button text={"블로그"} />
            <div>자식요소</div>
        </>
    );
}

export default App;
