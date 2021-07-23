import React from 'react';
import classes from './Users.module.css'
import userDefaultImage from "../../assets/images/userImageDefault.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";

const Users = (props) => {


    return (<div>
        <Paginator {...props}/>

        {props.users.map(item => {
            return <div>
            <span>
                    <div>
                        <NavLink to={'/profile/' + item.id}>
                            <img className={classes.avatar} src={item.photos.small != null ? item.photos.small : userDefaultImage}
                                 alt='ava'/>
                        </NavLink>
                    </div>
                <div>
                    {item.followed ?
                        <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                            props.unfollow(item.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === item.id)} onClick={() => {
                            props.follow(item.id)
                        }}>Follow</button>}
                </div>
                <span>
                    <span>
                        <div>{item.name}</div>
                        <div>{item.status}</div>
                    </span>
                    <span>
                        <div>'UK'</div>
                        <div>'London'</div>
                    </span>
                </span>
            </span>
            </div>
        })}
    </div>)
}

export default Users;