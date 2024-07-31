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

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
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
        <select name="country" onChange={onChange} value={input.country}>
          <option></option>
          <option value="KOREA">한국</option>
          <option value="USA">미국</option>
          <option value="JAPAN">일본</option>
        </select>
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
