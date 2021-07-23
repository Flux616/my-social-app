import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUser, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        console.log(this.props)
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.authorizedUserId;
        }
        this.props.getUser(id)
        this.props.getUserStatus(id)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        /*if (this.props.params.id !== prevProps.props.params.id) {
            this.refreshProfile()
        }*/
        this.refreshProfile()
    }


    render() {

        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

let dispatchACs = {
    getUser,
    getUserStatus,
    updateStatus
}

export default compose(connect(mapStateToProps, dispatchACs), withRouter)(ProfileContainer);

// WithAuthRedirect,