import React from 'react';
import {NavLink, Link} from   "react-router-dom"
import s from "./nav.module.css"
const Navbar = () => {

    const NavLinkIsActive = ({isActive}) => isActive ? s.active : ""

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={NavLinkIsActive} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={NavLinkIsActive} to="/dialogs">Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={NavLinkIsActive} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={NavLinkIsActive} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={NavLinkIsActive} to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={NavLinkIsActive} to="/users">Users Page</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
