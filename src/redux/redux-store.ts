import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer"
import authReducer from "./auth-reduser"
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk'
import appReducer from "./app-reduser"

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer;  // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>  // Определяет тип самостоятеьно

// FOR REDUX DEVTOOLS

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)
));

// @ts-ignore
window.__store__ = store

export default store