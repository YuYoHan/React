import React from "react";
import "../style/Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>제품1</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>1,000,000</strong>
                    <small>원</small>
                </p>
                <div className="product_rating">
                    <p>★</p>
                    <p>★</p>
                    <p>★</p>
                    <p>★</p>
                </div>
            </div>
            <img
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290"
                alt="img"
                id="img1"
            />
            <button>장바구니 담기</button>
        </div>
    );
}

export default Product;
