import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import classes from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/userImageDefault.jpg'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div>
                    <img
                        src='https://i.pinimg.com/originals/58/01/cf/5801cfba80c2e2af9d4fef797e5834ec.png'/>
                </div>
                <div className={s.descriptionBlock}>
                    <img className={classes.avatar} src={props.profile.photos.large || userPhoto}/>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        )
    }
}

export default ProfileInfo;