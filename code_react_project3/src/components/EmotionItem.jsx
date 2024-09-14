import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
    return (
        <div
            className={`EmotionItem ${
                isSelected ? `EmotionItem_on_${emotionId}` : ""
            }`}
            onClick={onClick} // 클릭 이벤트 추가
        >
            <img
                className="emotion_img"
                src={getEmotionImage(emotionId)}
                alt={emotionName}
            />
            <div className="emotion_name">{emotionName}</div>
        </div>
    );
};

export default EmotionItem;
