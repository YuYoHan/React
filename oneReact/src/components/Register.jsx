import { useState } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    const [name, setName] = useState("이름");
    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const [birth, setBirth] = useState("");
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    };

    const [country, setCountry] = useState("");
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const [bio, setBio] = useState("");
    const onChangeBio = (e) => {
        setBio(e.target.value);
    };

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder={"이름"}
                />
            </div>
            <div>
                <input value={birth} onChange={onChangeBirth} type="date" />
            </div>
            <div>
                <select onChange={onChangeCountry} value={country}>
                    <option></option>
                    <option value="KOREA">한국</option>
                    <option value="USA">미국</option>
                    <option value="JAPAN">일본</option>
                </select>
            </div>
            <div>
                <textarea onChange={onChangeBio} value={bio} />
            </div>
        </div>
    );
};

export default Register;
