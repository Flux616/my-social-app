import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {UserType} from "../types/types";

//ACTIONS CONSTS

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_USERS = 'users/SET_USERS';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

//STATE

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>  //Array of user id's for disabling buttons
}

export const InitialStateType = typeof initialState

//REDUCER

const usersReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.totalCount
            }
        case SET_USERS:
            return {...state, users: [...action.users]};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

//ACTION CREATORS INTERFACES

interface FollowSuccessAction {
    type: typeof FOLLOW
    id: number
}

interface UnfollowSuccessAction {
    type: typeof UNFOLLOW
    id: number
}

interface SetCurrentPageAction {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

interface SetTotalUsersCountAction {
    type: typeof SET_TOTAL_USERS_COUNT
    totalCount: number
}

interface SetUsersAction {
    type: typeof SET_USERS
    users: Array<UserType>
}

interface ToggleIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

interface ToggleFollowingAction {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    id: number
}

// UNION OF INTERFACES

type Action =
    FollowSuccessAction |
    UnfollowSuccessAction |
    SetCurrentPageAction |
    SetTotalUsersCountAction |
    SetUsersAction |
    ToggleIsFetchingAction |
    ToggleFollowingAction

//ACTION CREATORS

export const followSuccess = (id: number): FollowSuccessAction => ({type: FOLLOW, id: id});
export const unfollowSuccess = (id: number): UnfollowSuccessAction => ({type: UNFOLLOW, id: id});
export const setCurrentPage = (currentPage: number): SetCurrentPageAction => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountAction => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount
})
export const setUsers = (users: Array<UserType>): SetUsersAction => ({type: SET_USERS, users: users});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingAction => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleFollowing = (followingInProgress: boolean, id: number): ToggleFollowingAction => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: followingInProgress,
    id: id
})

// THUNKS

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount))
}

export const toggleFollow = async (dispatch: Dispatch, id: number, methodAPI: any, actionCreator: any) => {
    dispatch(toggleFollowing(true, id));
    let response = await methodAPI(id)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowing(false, id));
}

export const follow = (id: number) => async (dispatch: Dispatch) => {
    await toggleFollow(dispatch, id, usersAPI.follow, followSuccess)
}

export const unfollow = (id: number) => async (dispatch: Dispatch) => {
    await toggleFollow(dispatch, id, usersAPI.unfollow, unfollowSuccess)
}

export default usersReducer;