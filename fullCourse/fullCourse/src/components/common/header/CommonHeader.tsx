import styles from "./CommonHeader.module.scss";

function CommonHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logoBox}>
        <img
          src="../../../assets/images/image-logo.png"
          alt="Img"
          className={styles.header_logoBox_logo}
        />
        <span className={styles.header_logoBox_title}>Photo</span>
        <div className={styles.header_profileBox}>
          <button className={styles.header_profileBox_button}>사진제출</button>
          <button className={styles.header_profileBox_button}>북마크</button>
          <button className={styles.header_profileBox_userName}>
            zxzz | zxzz@naver.com
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommonHeader;
