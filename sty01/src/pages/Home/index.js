import "../../styles/index.css";
import MyComponent from "../../props/1";
import changeProps from "../../props/2";

let name = prompt("이름을 입력하세요");
let age = Number(prompt("나이를 입력하세요"));
let name2 = "채원";
let age2 = 27;

function HomePage() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <MyComponent name={name} age={age} />
            <MyComponent name={name2} age={age2} />
            <MyComponent>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </MyComponent>
            <changeProps />
        </div>
    );
}
export default HomePage;
