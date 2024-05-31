import React, {Component} from "react";

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : '  +props.prop_value);
        return{tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    // 작성한 함수들 중 가장 마지막으로 실행
    // render 함수가 return 되는 html 형식의 코드를
    // 그려준 후 실행
    // 화면이 모두 그려진 후에 실행되어야 하는 이벤트, 초기화 때 사용한다.
    componentDidMount() {
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
    }

    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUCNTION]</h2>
        )
    }
}
export default R006_LifecycleEx;