import React from "react";
import "../style/Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home_image" src="/image.png" alt="home_image" />
                <div className="home_row">
                    <Product
                        id="2323"
                        title="제품1"
                        price={3000}
                        image="https://www.itworld.co.kr/files/itworld/ITW_202311_01/space-back-macbook-pro-open.jpg"
                        rating={5}
                    />
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
