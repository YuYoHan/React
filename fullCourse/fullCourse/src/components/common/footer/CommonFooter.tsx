import styles from "./CommonFooter.module.scss";

function CommonFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.pagenation}>
        <button className={styles.pagenation_button}>
          <img src="../../../assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {/* 변경될 UI 부분 */}
        <span>1</span>
        <button className={styles.pagenation_button}>
          <img src="../../../assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default CommonFooter;
