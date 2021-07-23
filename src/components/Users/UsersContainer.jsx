import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    toggleFollowing,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowing={this.props.toggleFollowing}
                   followingInProgress={this.props.followingInProgress}
                   totalItemsCount={this.props.totalItemsCount}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        totalItemsCount: getTotalUsersCount(state)
    }
}

const dispatchACs = {
    follow,
    unfollow,
    toggleFollowing,
    getUsers: requestUsers,
}

export default compose(connect(mapStateToProps, dispatchACs), WithAuthRedirect)(UsersContainer);