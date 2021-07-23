import {usersAPI} from "../api/api";

//ACTIONS CONST

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_USERS = 'SET_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

//REDUCER

const usersReducer = (state = initialState, action) => {

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
            return { ...state, users: [ ...action.users]};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
}

//ACTION CREATORS

export const followSuccess = (id) => ({type: FOLLOW, id: id});
export const unfollowSuccess = (id) => ({type: UNFOLLOW, id: id});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount: totalCount})
export const setUsers = (usersList) => ({type: SET_USERS, users: usersList});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowing = (followingInProgress, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: followingInProgress, id: id})

// THUNKS

export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const toggleFollow = async (dispatch, id, methodAPI, actionCreator) => {
    dispatch(toggleFollowing(true, id));
    let response = await methodAPI(id)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowing(false, id));
}

export const follow = (id) =>  async dispatch => {
    await toggleFollow(dispatch, id, usersAPI.follow, followSuccess)
}


export const unfollow = (id) => async dispatch => {
    await toggleFollow(dispatch, id, usersAPI.unfollow, unfollowSuccess)
}

export default usersReducer;