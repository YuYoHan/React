import styles from "../index/styles/index.module.scss";
import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSearchBar from "@components/common/header/navigation/searchBar/CommonSearchBar";

function index() {
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <CommonHeader />
      {/* 공통 네비게이션 UI 부분 */}

      <div className={styles.page_contents}>
        <div className={styles.page_contents_introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper_title}>Photo</span>
            <span className={styles.wrapper_desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크레에이터의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
          </div>
        </div>
        <div className={styles.page_contents_imageBox}></div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <CommonSearchBar />
    </div>
  );
}

export default index;
