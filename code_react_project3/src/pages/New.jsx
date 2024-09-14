import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";

const New = () => {
    const nav = useNavigate();

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                leftChild={
                    // nav(-1) : 페이지를 뒤로 이동
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
                }
            />
            <Editor />
        </div>
    );
};

export default New;
