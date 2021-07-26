import React from 'react';
import classes from './Users.module.css'
import userDefaultImage from "../../assets/images/userImageDefault.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import {UserType} from "../../types/types";

type Props = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<Props> = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {

    return (<div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} pageSize={pageSize}/>

        {users.map((item: any) => {
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
                </span>
            </span>
            </div>
        })}
    </div>)
}

export default Users;