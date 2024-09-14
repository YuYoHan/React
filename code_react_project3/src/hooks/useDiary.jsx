import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// custom hook
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    // eslint-disable-next-line no-undef
    useEffect(() => {
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(id)
        );

        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.");
            nav("/", { replace: true });
        } else {
            setCurDiaryItem(currentDiaryItem); // 존재하는 일기를 찾았을 때만 상태를 설정
        }
    }, [id, data]);
    return curDiaryItem;
};
export default useDiary;
