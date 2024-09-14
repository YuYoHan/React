import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringDate } from "../util/getStringDate";

const Editor = ({ initData, onSubmit }) => {
    const nav = useNavigate();

    useEffect(() => {
        if (initData) {
            console.log("Setting initData:", initData);
            setInput({
                ...initData,
                // eslint-disable-next-line react/prop-types
                createdDate: new Date(Number(initData.createdDate)), // 날짜 형식 변환
            });
        }
    }, [initData]);

    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 3,
        content: "",
    });

    const onChangeInput = (e) => {
        console.log(e.target.name); // 현재 어떤 요소에 입력이 들어온건지
        console.log(e.target.value); // 입력된 값이 무엇인지?

        const { name, value } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [name]: name === "createdDate" ? new Date(value) : value,
        }));
    };

    const onSubmitButton = () => {
        onSubmit(input);
    };
    git;
    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name="createdDate"
                    onChange={onChangeInput}
                    value={getStringDate(input.createdDate)}
                    type="date"
                />
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={() =>
                                onChangeInput({
                                    target: {
                                        name: "emotionId",
                                        value: item.emotionId,
                                    },
                                })
                            }
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="오늘은 어땠나요?"
                />
            </section>
            <section className="button_section">
                <Button onClick={() => nav(-1)} text={"취소하기"} />
                <Button
                    onClick={onSubmitButton}
                    text={"작성완료"}
                    type={"POSITIVE"}
                />
            </section>
        </div>
    );
};

export default Editor;
