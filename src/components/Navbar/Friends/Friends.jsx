import React from 'react';
import FriendList from './FriendList/FriendList'
import classes from './Friends.module.css'

function Friends (props) {
    return (
        <div>
            <h2>Friends</h2>
            <div className={classes.friendsGrid}>            
                <FriendList className={classes.item} store={props.store}/>
            </div>
        </div>
    )
}

export default Friends;