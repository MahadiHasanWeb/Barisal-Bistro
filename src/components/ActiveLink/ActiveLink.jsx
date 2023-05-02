import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive
                ? "font-bold text-[#00ADB5]" : ""
            }
        > {children}</NavLink>
    );
};

export default ActiveLink;