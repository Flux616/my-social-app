import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const statusOnChange = (event) => {
        setStatus(event.target.value)
    }



        return (
            <div>
                {!editMode &&
                    <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onChange={statusOnChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
                }
            </div>
        )

}

export default ProfileStatusWithHooks;