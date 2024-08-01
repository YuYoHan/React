import React from "react";
import { useState } from "react";
import useInput from "./../hooks/useInput";

// 3가지 Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출할 수 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
//   ➡️ use... 이런식으로 붙이면 끝이다.

const HooksEaxm = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return <div>hookExam</div>;
};

export default HooksEaxm;
