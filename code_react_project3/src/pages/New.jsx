import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);

    const nav = useNavigate();
    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime(), input.emotionId, input.content);
        // 새로운 글을 작성할 때 메인 페이지로 이동하면서
        // replace : true로 뒤로가기 방지
        nav("/", { replace: true });
    };

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                    // nav(-1) : 페이지를 뒤로 이동
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
                }
            />
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;
