import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.header}>
            <img src='https://v1.cosmos.network/img/logo.e561e4f3.png'/>

            <div className={classes.loginBlock}>
                {props.isAuth ? <div>{ props.login } - <button onClick={props.logOut}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;