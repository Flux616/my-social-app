import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

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
                    <img src={props.profile.photos.large}/>
                    { (props.ownerId === props.profile.userId) && <input type='file' onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        )
    }
}

export default ProfileInfo;