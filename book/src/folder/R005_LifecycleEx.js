import React, { Component } from "react";

class R005_LifecycleEx extends Component {
    // 생명주기 함수 중 가장 먼저 실행되며 처음 한번만 호출
    // 내부에서 사용하는 변수(state)를 선언하고 부모 객체에게 전달받은 변수를 초기화할 때 사용
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    render() {
        console.log('3. render Call');
        return(
            <h2>[THIS IS CONSTRUCTOR FUCNTION]</h2>
        )
    }
}
export default R005_LifecycleEx;