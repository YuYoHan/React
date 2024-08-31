import { useState } from "react";
import React from "react";

function UseState02() {
    const [time, setTime] = useState(1);

    const onHandleClick = () => {
        let newTime;

        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    };

    const [nameList, setNameList] = useState([
        {
            name: "",
        },
    ]);

    const [name, setName] = useState("");

    const onName = (e) => {
        setName(e.target.value);
    };

    const onAddName = () => {
        setNameList([...nameList, { name }]);
        setName("");

        let newTime;

        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1;
        }
        setTime(newTime);
    };

    const onRemoveNmae = (name) => {
        const remove = nameList.filter((user) => user.name !== name);
        setNameList(remove);
    };

    return (
        <>
            <div>
                <span>현재 시간 : {time}시</span>
                <button onClick={onHandleClick}>update</button>
            </div>
            <div>
                <input value={name} onChange={onName} />
                <button onClick={onAddName}>추가</button>
            </div>
            {nameList.map((user) => (
                <>
                    <div>{user.name}</div>
                    <button onClick={() => onRemoveNmae(user.name)}>
                        삭제
                    </button>
                </>
            ))}
        </>
    );
}

export default UseState02;
