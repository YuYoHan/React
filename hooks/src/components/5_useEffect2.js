import React, { useEffect } from "react";

const Timer = (props) => {
    useEffect(() => {
        // setInterval()
        // 웹페이지의 특정 부분을 주기적으로 업데이트 해줘야 하거나 어떤 API로 부터 변경된 데이터를
        // 주기적으로 받아와야 하는 경우가 있는데 이럴때 사용한다.
        // 즉, 어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을때 사용한다.
        const timer = setInterval(() => {
            console.log(`타이머 진행중.....`);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <span>타이머 시작</span>
        </div>
    );
};
export default Timer;
