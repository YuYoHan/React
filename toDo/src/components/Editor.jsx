import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {
    // 받아온 것을 구조분해할당으로 사용해서 onCreate만 사용
    const { onCreate } = useContext(TodoContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();
    // content 내용이 변경되면 onChange로 인해서
    // setContent()로 변경된 내용이 useState로 인해 변경된다.
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // onKeyDown은 사용자가 입력하는 이벤트를 알 수 있는데
    // 어떤 키를 눌렀는지는 keyCode로 알 수 있다.
    const onKeydown = (e) => {
        // 13번은 엔터다.
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    // 추가 버튼을 클릭하면 매개변수로 받은 onCreate 함수가 동작한다.
    // 그리고 content 값을 전달해준다.
    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    return (
        <div className="Editor">
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeydown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
