import React from "react";
import "../style/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="https://www.aseanexpress.co.kr/data/photos/20240208/art_17087617650755_6626bf.png"/>
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <span className="header_optionLineTwo">로그인</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">반가워요!</span>
                    <span className="header_optionLineTwo">구독과 좋아요</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne"></span>
                    <span className="header_optionLineTwo"></span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <img src="/check.png" alt="img" id="check_img" />
                        <span className="header_optionLineTwoheader_basketCount">
                            0
                        </span>
                </div>
                </Link>
            </div>
        </div>
    );
}
export default Header;
