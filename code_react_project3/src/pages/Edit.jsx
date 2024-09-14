import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
    const nav = useNavigate();
    const params = useParams();
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();

    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        );

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        } else {
            setCurDiaryItem(currentDiaryItem); // 존재하는 일기를 찾았을 때만 상태를 설정
        }
    }, [params.id, data]);

    const onClickDelete = () => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            // 일기 삭제 로직
            onDelete(params.id);
            nav("/", { replace: true });
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정하시겠어요?")) {
            console.log("onSubmit input:", input);
            onUpdate(
                params.id,
                input.createdDate.getTime(),
                input.emotionId,
                input.content
            );
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
            <Editor initData={curDiaryItem} onSubmit={onSubmit} />
        </div>
    );
};

export default Edit;
