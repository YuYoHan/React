import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
    const nav = useNavigate();
    const params = useParams();
    const { onDelete } = useContext(DiaryDispatchContext);

    const onClickDelete = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            // 일기 삭제 로직
            onDelete(params.id);
            nav("/", { replace: true });
        }
    };
    return (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={
                    <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
                }
                rightChild={
                    <Button
                        onClick={onClickDelete}
                        text={"삭제하기"}
                        type={"NEGATIVE"}
                    />
                }
            />
            <Editor />
        </div>
    );
};

export default Edit;
