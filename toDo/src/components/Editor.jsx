import "./Editor.css";
import { useState } from "react";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    // content 내용이 변경되면 onChange로 인해서
    // setContent()로 변경된 내용이 useState로 인해 변경된다.
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // 추가 버튼을 클릭하면 매개변수로 받은 onCreate 함수가 동작한다.
    // 그리고 content 값을 전달해준다.
    const onSubmit = () => {
        onCreate(content);
    };
    return (
        <div className="Editor">
            <input
                value={content}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
