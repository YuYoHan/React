import styles from "./CommonSearchBar.module.scss";

function CommonSearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar_search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검색하세요"
          className={styles.searchBar_search_input}
        />
        <img src="../../../../../assets/icons/icon-search.svg" alt="img" />
      </div>
    </div>
  );
}

export default CommonSearchBar;
