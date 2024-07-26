import React from "react";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="https://s3-ap-northeast-2.amazonaws.com/stockplus-insight-seoul/articles/pictures/17725/content_Amazon-Logo_1.jpg"
            />
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
            </div>
        </div>
    );
}
export default Header;
