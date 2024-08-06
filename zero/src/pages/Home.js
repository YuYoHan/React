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
                        id="1"
                        title="제품1"
                        price={3000}
                        image="https://www.itworld.co.kr/files/itworld/ITW_202311_01/space-back-macbook-pro-open.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="2"
                        title="제품2"
                        price={3000}
                        image="https://dimg.donga.com/wps/NEWS/IMAGE/2020/09/14/102930719.2.jpg"
                        rating={5}
                    />
                    <Product
                        id="3"
                        title="제품3"
                        price={3000}
                        image="https://p4.wallpaperbetter.com/wallpaper/202/872/950/car-lamborghini-huracan-lp-610-4-edit-black-wallpaper-preview.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id="4"
                        title="제품4"
                        price={3000}
                        image="https://shs-dome3.com/data/editor/2304/d8051cbb3740b4fe8d23cd2f44145f06_1681120090_3317.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
