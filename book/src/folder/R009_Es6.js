import React, {Component} from "react";

class R009_Es6 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let jsString1 = '자바스크립트'
        let jsString2 = '입니다\n다음 줄입니다.'
    }
    render() {
        return(
            <h2>THIS IS ES6 STRING</h2>
        )
    }
}