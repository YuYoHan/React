import React from "react";

function Content(props) {
    return (
        <>
            <h1>
                Hello I am {props.name}, my age is {props.age}
            </h1>
            <div>{props.children}</div>
        </>
    );
}
export default Content;
