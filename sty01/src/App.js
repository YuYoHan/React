import { useState } from "react";

function App() {
    const [title, setTitle] = useState("");

    return (
        <div className="container">
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    className="form-control"
                    value={title}
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                ></input>
            </div>
            <button className="btn">Post</button>
        </div>
    );
}

export default App;
