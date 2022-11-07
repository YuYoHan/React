import { useState } from "react";

export function Hello(props) {
    const [name, setName] = useState("MinJu");
    const [age, setAge] = useState(props.age);

    return (
        <div>
            <h2 id="name">
                {name}({age})
            </h2>
            <button
                onClick={() => {
                    setName(name === "MinJu" ? "sakura" : "MinJu");
                    setAge(age + 1);
                }}
            >
                change
            </button>
        </div>
    );
}
