import React from "react";
import "../style/Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="product_rating">
                    {
                        /*  배열을 rating만큼 돌리겠다는 뜻이고
                            fill은 채우겠다는 뜻이고 map은 채울 것을 나타내는 것이다. */
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>★</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="img" id="img1" />
            <button>장바구니 담기</button>
        </div>
    );
}

export default Product;
