import "./App.css";
import Checkout from "./pages/Checkout.js";
import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        } 
                    />
                    <Route 
                        path="/checkout" 
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
