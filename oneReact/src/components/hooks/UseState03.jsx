import React from "react";
import { useState } from "react";

function UseState03() {
    const [person, setPerson] = useState([
        {
            name: "John",
        },
    ]);

    const [personName, setPersonName] = useState("");

    const writeName = (e) => {
        setPersonName(e.target.value);
    };

    const onAdd = () => {
        setPerson([...person, { name: personName }]);
        setPersonName("");
    };

    const onBan = (name) => {
        const ban = person.filter((user) => user.name !== name);
        setPerson(ban);
    };

    return (
        <>
            <p>현재 파티원 : </p>
            {person.map((user) => (
                <>
                    <div>
                        <span>{user.name}</span> &nbsp;
                        <button onClick={() => onBan(user.name)}>ban</button>
                    </div>
                </>
            ))}
            <div>
                <input value={personName} onChange={writeName} />
            </div>
            <button onClick={onAdd}>add</button>
        </>
    );
}

export default UseState03;
