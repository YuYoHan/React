import styled from "styled-components";
import { flexCenter, title } from "../../../../styles/common";
import { media } from "../../../../styles/media";

function TodoTitle() {
    return (
        <Wrapper>
            Todo 타이틀입니다.
            <p>
                남은할일<span>0</span>개
            </p>
        </Wrapper>
    );
}
export default TodoTitle;

const Wrapper = styled.div`
    // styled components css기능으로 css 문법을 재사용할 수 있도록(변수화)
    ${flexCenter}
    ${title}
    background-color: ${(props) => props.theme.palette.primary[300]};
    font-size: ${({ theme }) => theme.fontSize.xLage};
    // & : 자기 자신을 말한다(여기서는 div).
    & > P {
        color: red;
        & > span {
            display: inline-block;
            text-align: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: aqua;
        }
    }

    ${media.tablet} {
        background-color: red;
    }
`;
