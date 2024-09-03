import styles from "./Card.module.scss";

function Card() {
  const openDialog = () => {
    console.log("함수호출");
  };

  return (
    <div className={styles.card} onClick={openDialog}>
      <img src="" alt="" className={styles.card_image} />
    </div>
  );
}

export default Card;
