import React from "react";
import "../style/Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_image" src="/image.png" alt="home_image" />
                <div className="home_row">
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Home;
