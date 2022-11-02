import "../../styles/index.css";
import LifecycleEx from "./R005_LifecycleEx";
function HomePage() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <LifecycleEx prop_value="FromApp.js" />
        </div>
    );
}
export default HomePage;
