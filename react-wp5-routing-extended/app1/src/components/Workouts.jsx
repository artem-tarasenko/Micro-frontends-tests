import React from "react";
import styles from './styles.scss';

export default function Workouts() {

    return (
        <div className="wrapper" >
            <h3 className="module">app1@Workouts</h3>
            <p className="styleLabel" >Styled with SCSS</p>
            <div className="moduleContainer wp" >
                <h4>Workouts component</h4>
                <div className="wp-list">
                    <p>Workout program 1</p>
                    <p>Workout program 2</p>
                    <p>Workout program 3</p>

                </div>
            </div>
        </div>
    )
}