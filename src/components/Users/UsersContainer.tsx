import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
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
    getIsFetching,
    getPageSize,
    getTotalItemsCount,
    getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from '../../redux/redux-store';


type MapStateProps = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalItemsCount: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchProps = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
    toggleFollowing: (followingInProgress: boolean, id: number) => void
}

type Props = MapStateProps & MapDispatchProps

class UsersContainer extends React.Component<Props> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
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
                   followingInProgress={this.props.followingInProgress}
                   totalItemsCount={this.props.totalItemsCount}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
        totalItemsCount: getTotalItemsCount(state),
        isFetching: getIsFetching(state)
    }
}

const dispatchACs = {
    follow,
    unfollow,
    toggleFollowing,
    getUsers: requestUsers,
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>   ---  connect generic

export default compose(
    connect<MapStateProps, MapDispatchProps, any, AppStateType>
    (mapStateToProps, dispatchACs), WithAuthRedirect)(UsersContainer);