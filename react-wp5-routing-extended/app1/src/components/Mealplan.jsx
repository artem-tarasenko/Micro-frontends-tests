import React from "react";
import './styles.scss';

export default function Mealplan() {

    return (
        <div className="wrapper" >
            <h3 className="module">app1@Mealplan</h3>
            <p className="styleLabel" >Styled with SCSS</p>
            <div className="moduleContainer mp" >
                <h4>Mealplan component</h4>
                <div className="days">
                    <div className="day">Day 1</div>
                    <div className="day">Day 2</div>
                    <div className="day">Day 3</div>
                    <div className="day">Day 4</div>
                    <div className="day">Day 5</div>
                    <div className="day">Day 6</div>
                    <div className="day">Day 7</div>
                </div>
            </div>
        </div>
    )
}