import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import { SetAuthUserDataActionPayloadType } from "../types/types";

//ACTION CONSTS

const SET_USER_DATA = 'auth/SET_USER_DATA'

//STATE

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export type InitialStateType = typeof initialState

//REDUCER

const authReducer = (state = initialState, action : Action) : InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

//ACTION CREATORS INTERFACES

interface SetUserAction {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

//UNION OF INTERFACES

type Action = SetUserAction;

//THUNK

export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) : SetUserAction => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const authMe = () => async (dispatch : Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const logIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(authMe() as any)
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Common error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logOut = () => async (dispatch : Dispatch)  => {
    let response = authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
}

export default authReducer;