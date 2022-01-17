import React from "react";


export default function Homepage() {

    return (
        <div className="homecontainer">
            <h3>React Root App</h3>
            <hr />
            <p>Home page is a part of a root app</p>
            <p>Initially, shared state from "source app" is unset</p>
            <p>State can be changed on either "Counter app1" or "Change counter app2" page (remote module)</p>
            <p>State is always displayed on the top section of the root app</p>
        </div>
    )
}