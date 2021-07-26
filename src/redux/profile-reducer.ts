import {profileAPI} from "../api/api";
import {Dispatch} from "redux";
import {PhotosType, PostType, ProfileType} from "../types/types";

//ACTION CONSTS

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const GET_STATUS = 'profile/GET_STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

//STATE

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
};

export const InitialStateType = typeof initialState;

// REDUCER

const profileReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postBody,
                likesCount: 0
            };

            return {
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

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: {...action.photos}
                }
            }

        default:
            return state;
    }
}

//ACTION CREATORS INTERFACES

interface AddPostAction {
    type: typeof ADD_POST
    postBody: string
}

interface SetUserProfileAction {
    type: typeof SET_USER_PROFILE
    profile: object
}

interface SetStatusAction {
    type: typeof SET_STATUS
    status: string
}

interface GetStatusAction {
    type: typeof GET_STATUS
    status: string
}

interface SavePhotoSuccessAction {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

//UNION OF INTERFACES

type Action = AddPostAction | SetUserProfileAction | SetStatusAction | GetStatusAction | SavePhotoSuccessAction;


//ACTION CREATORS

export const addPost = (postBody: string): AddPostAction => ({type: ADD_POST, postBody: postBody})
export const setUserProfile = (profile: ProfileType): SetUserProfileAction => ({
    type: SET_USER_PROFILE,
    profile: profile
})
export const setStatus = (status: string): SetStatusAction => ({type: SET_STATUS, status: status})
export const getStatus = (status: string): GetStatusAction => ({type: GET_STATUS, status: status})
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessAction => ({
    type: SAVE_PHOTO_SUCCESS,
    photos: photos
})

//THUNKS

export const getUser = (id: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getUser(id)

    dispatch(setUserProfile(response.data));
}
export const getUserStatus = (id: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(id)

    dispatch(getStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (image: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(image);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }

}


export default profileReducer;