import styles from "./Card.module.scss";
import { CardDTO } from "@/pages/index/types/card";

interface Props {
  prop: CardDTO;
}

function Card({ prop }: Props) {
  // prop 및 prop.urls 유효성 검사
  if (!prop || !prop.urls || !prop.urls.small) {
    return <div>정보가 없습니다.</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__imageBox}>
        <img
          src={prop.urls.small}
          alt={prop.alt_description || "이미지 설명 없음"}
          className={styles.card__imageBox__image}
        />
      </div>
      <div className={styles.card__infoBox}>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>작성자</span>
          <span className={styles.value}>{prop.user.name}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>이미지 크기</span>
          <span className={styles.value}>
            {prop.width} X {prop.height}
          </span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>업로드 날짜</span>
          <span className={styles.value}>{prop.created_at.split("T")[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>마지막 업데이트</span>
          <span className={styles.value}>{prop.updated_at.split("T")[0]}</span>
        </div>
        <div className={styles.card__infoBox__row}>
          <span className={styles.label}>다운로드 수</span>
          <span className={styles.value}>{prop.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
