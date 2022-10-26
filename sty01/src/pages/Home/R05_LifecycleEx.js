import { Component } from "react";

class R005_LifecycleEx extends Component {
    // constructor(props) 함수는 생명주기 함수 중 가장 먼저 실행되며, 처음 한번만 호출된다.
    // component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화할때 사용한다.
    constructor(props) {
        // super() 함수는 자바처럼 맨 위에 호출해야 한다.
        super(props);
        this.state = {};
        console.log("1. constructor Call");
    }

    render() {
        console.log("3. render Call");
        return <h2>[This is constructor function]</h2>;
    }
}
export default R005_LifecycleEx;
