import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
    });

    /** 이렇게 초기값을 설정할 수 있다. */
    const countRef = useRef(0);

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <div>
                <input
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"
                />
            </div>
            <div>
                <select
                    name="country"
                    onChange={onChange}
                    value={input.country}
                >
                    <option></option>
                    <option value="KOREA">한국</option>
                    <option value="USA">미국</option>
                    <option value="JAPAN">일본</option>
                </select>
            </div>
            <div>
                <textarea name="bio" onChange={onChange} value={input.bio} />
            </div>
        </div>
    );
};

export default Register;
