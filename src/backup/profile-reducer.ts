import {profileAPI} from "../api/api";
import {Dispatch} from "redux";

interface  AddPostAction {
    type: 'ADD_POST'
    postBody: string
}

interface SetUserProfileAction {
    type: 'SET_USER_PROFILE'
    profile: object
}

interface SetStatusAction {
    type: 'SET_STATUS'
    status: string
}

interface GetStatusAction {
    type: 'GET_STATUS'
    status: string
}

type Action = AddPostAction | SetUserProfileAction | SetStatusAction | GetStatusAction;

type PostsType = {
    id: number | null
    message: string | null
    likesCount: number | null
}

type InitialStateType = {
    posts: PostsType[]
    profile: null | number
    status: null | string
}

let initialState : InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action : Action) => {

    let stateCopy;

    switch (action.type) {
        case 'ADD_POST':
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

        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: {...action.profile}
            }

        case 'GET_STATUS':
            return {
                ...state,
                status: action.status
            }

        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}


export const addPost = (postBody : string) => ({type: 'ADD_POST', postBody: postBody})
export const setUserProfile = (profile : object) => ({type: 'SET_USER_PROFILE', profile: profile})
export const setStatus = (status : string) => ({type: 'SET_STATUS', status: status})
export const getStatus = (status : string) => ({type: 'GET_STATUS', status: status})


export const getUser = (id : number) => async (dispatch : Dispatch) => {
    const response = await profileAPI.getUser(id)

    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (id : number) => async (dispatch : Dispatch) => {
    const response = await profileAPI.getStatus(id)

    dispatch(getStatus(response.data))
}

export const updateStatus = (status : string) => async (dispatch : Dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0){
        dispatch(setStatus(status))
    }

}

export default profileReducer;