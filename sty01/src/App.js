import { useState } from "react";
import styled from "styled-components";

function App() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = () => {
        console.log(title, body);
    };

    let btn = styled.button`
        border-radius: 5px;
        background-color: deepskyblue;
        color: #fff;
    `;

    return (
        <div className="container">
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    className="form-control"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <textarea
                    className="form-control"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                    rows="20"
                />
            </div>
            <btn className="btn" onClick={onSubmit}>
                Post
            </btn>
        </div>
    );
}

export default App;
