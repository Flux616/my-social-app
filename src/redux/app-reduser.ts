import {authMe} from "./auth-reduser";
import {Dispatch} from 'redux'

// ACTION CONSTS

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

// STATE

type InitialStateType = {
    initialized: boolean
}

let initialState : InitialStateType = {
    initialized: false
}

//REDUCER

const appReducer = (state = initialState, action : Action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

//ACTION CREATORS INTERFACES

interface InitializingSuccessAction {
    type: typeof INITIALIZED_SUCCESS
}

//UNION OF INTERFACES

type Action = InitializingSuccessAction;

//ACTION CREATORS

export const initializingSuccess = () => ({type: INITIALIZED_SUCCESS});

//THUNKS

export const initializeApp = () => async (dispatch : Dispatch) => {
    await dispatch(authMe() as any);

    dispatch(initializingSuccess())
}


export default appReducer;