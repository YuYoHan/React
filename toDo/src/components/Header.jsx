import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 </h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
// 최적화하기 위한 동작
// 이렇게 처리하는 이유는 헤더가 불필요하게 리렌더링하기 때문에
// 불필요한 리렌더링을 막기위해서 최적화
const memoizedHeader = memo(Header);
// 일반적으로 내보네는 Header가 아니라 최적화 시킨 것을 내보냄
export default memoizedHeader;
