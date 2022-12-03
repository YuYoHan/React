import { useEffect, useState } from "react";

function Effect() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 랜더링 될때마다 매번 실행됨
    useEffect(() => {
        console.log("랜더링");
    }, [count]);

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name : {name}</span>
        </div>
    );
}
export default Effect;
