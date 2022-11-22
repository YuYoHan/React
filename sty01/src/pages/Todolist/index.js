import { useState } from "react";
import styled from "styled-components";

function Todolist() {
    const [list, setList] = useState([
        {
            index: 1,
            do: "",
            time: "",
        },
    ]);

    const [inPutValue, setInPutValue] = useState("");

    const onList = (e) => {
        setInPutValue(e.target.value);
    };

    const onAddList = () => {
        let index = list[list.length - 1].index + 1;

        let time = new Date();
        let hours = ("0" + time.getHours()).slice(-2);
        let min = ("0" + time.getMinutes()).slice(-2);
        let second = ("0" + time.getMinutes()).slice(-2);

        let writeTime = hours + ":" + min + ":" + second;

        setList([...list, { index, do: inPutValue, time: writeTime }]);
        setInPutValue("");
    };

    const onRemove = (index) => {
        const remove = list.filter((user) => user.index !== index);
        setList(remove);
    };

    return (
        <메인>
            <div>
                {list.map((user) => (
                    <>
                        <박스>
                            {user.index}번<br />
                            {user.do}
                            <br />
                            {user.time}
                        </박스>
                        <button onClick={() => onRemove(user.index)}>
                            삭제
                        </button>
                    </>
                ))}
            </div>
            <input value={inPutValue} type="text" onChange={onList} />
            <button onClick={onAddList}>추가</button>
        </메인>
    );
}
export default Todolist;

const 메인 = styled.main`
    height: 100vh;
    background-color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const 박스 = styled.div`
    width: 500px;
    overflow: hidden;
    height: auto;
    border: 1px solid deepskyblue;
`;
