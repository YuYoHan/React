import styled from "styled-components";
import { flexCenter, Title } from "../../../../styles/common";

function TodoTitle() {
    return (
        <div>
            Todo 타이틀입니다.
            <p>
                남은할일<span>0</span>개
            </p>
        </div>
    );
}
export default TodoTitle;

const Wrapper = styled.div`
    ${flexCenter};
    ${Title};
`;
