import { useMemo, useState } from "react";

const calculate = (number, number2) => {
    console.log("계산!");
    return number + number2;
};

function Memo() {
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    // const sum = calculate(number, number2);
    const sum = useMemo(() => {
        return calculate(number, number2);
    }, [number, number2]);

    return (
        <div>
            <h3>계산기</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <span> + </span>
            <input
                type="number2"
                value={number2}
                onChange={(e) => setNumber2(parseInt(e.target.value))}
            />
            <span> = {sum}</span>
        </div>
    );
}
export default Memo;
