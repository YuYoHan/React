class R006_LifecycleEx extends Comment {
    // 두 번째로 실행된다.
    // 컴퍼넌트가 새로운 props를 받게 됐을 때 state를 변경해준다.
    static getDerivedStateFromProps(props, state) {
        console.log("2. getDerivedStateFromProps Call : " + props.prop_value);
        return {};
    }

    // 이게 가장 먼저 실행
    constructor(props) {
        super(props);
        this.state = {};
        console.log("1. constructor Call");
    }

    render() {
        console.log("3. render Call");
        return <h2>[This is constructor function]</h2>;
    }
}

export default R006_LifecycleEx;
