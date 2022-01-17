import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from './Settings.module.css';

export default function Settings() {

    return (
        <div className={styles.wrapper} >
            <h3 className={styles.module}>app2@Settings</h3>
            <p className={styles.styleLabel}>Styled with CSS Modules</p>
            <div className={styles.settingsContainer} >
                <h4>User settings component - Submenu test</h4>
                <ul>
                    <li><Link to='/settings/user-page' >User info</Link></li>
                    <li><Link to='/settings/system' >System settings</Link></li>
                </ul>
                
            </div>
            <div>
                <Outlet />
            </div>
                
        </div>
    )
}