import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const GET_STATUS = 'GET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postBody,
                likesCount: 0
            };

            return stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            }

        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}


export const addPostActionCreator = (postBody) => ({type: ADD_POST, postBody: postBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setStatus = (status) => ({type: SET_STATUS, status: status})
export const getStatus = (status) => ({type: GET_STATUS, status: status})


export const getUser = (id) => dispatch => {
    profileAPI.getUser(id)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getUserStatus = (id) => dispatch => {
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(getStatus(response.data))
        })
}

export const updateStatus = (status) => dispatch => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
        }})
}


export default profileReducer;