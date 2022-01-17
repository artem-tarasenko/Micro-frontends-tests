import React from "react";
import "./styles/main.scss";

export default function Form() {
    return (
        <div className="wrapper">
            <h3 className="module">app2@Form</h3>
            <p className="styleLabel">Styled with SASS</p>
            <div className="form">
                <h2>Simpe Form component</h2>
                <input type="email" placeholder="Enter Email-id" />
                <input type="password" placeholder="Enter password" />
                <button type="submit">Submit</button>
            </div>
        </div>
        
    )
}