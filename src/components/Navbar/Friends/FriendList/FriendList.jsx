import React from 'react';
import classes from './FriendList.module.css'

function FriendList (props) {
    return props.store.sidebar.friends.map( item => {
        return (
        <div className={classes.friendIcon}>
            <img src={item.ava}></img>
            <p>{item.name}</p>
        </div>        
    )})
}

export default FriendList;