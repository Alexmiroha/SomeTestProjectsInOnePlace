import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <ul>
                <li>
                    <NavLink to={'/colorPicker'}>
                        <h6>ColorPicker</h6>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/calendar'}>
                        <h6>Calendar</h6>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
