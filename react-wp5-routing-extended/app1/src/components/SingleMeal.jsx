import React from "react";
import './styles.scss';

export default function SingleMeal() {

    return (
        <div className="wrapper" >
            <h3 className="module">app1@SingleMeal</h3>
            <p className="styleLabel" >Styled with SCSS</p>
            <div className="moduleContainer mp" >
                <h4>Newly added component to App1</h4>
                <hr />
                <p>Ingredients...</p>
                <p>Initially this component was not exposed</p>
            </div>
        </div>
    )
}