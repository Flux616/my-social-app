//ACTION CONSTS

import {DialogType, MessageType} from "../types/types";

const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

//STATE

let initialState  = {
    dialogs: [
        {id: 1, name: 'Gwyn'},
        {id: 2, name: 'Artorias'},
        {id: 3, name: 'Gwynewere'},
        {id: 4, name: 'Solar'},
        {id: 5, name: 'Firekeeper'},
        {id: 6, name: 'Sigward'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

// REDUCER

const dialogsReducer = (state = initialState, action: Action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.message}]
            };

        default:
            return state;
    }
}

//ACTION CREATORS INTERFACES

interface SendMessageAction {
    type: typeof SEND_MESSAGE
    message: string
}

//UNION OF INTERFACES

type Action = SendMessageAction

//THUNKS

export const sendMessageCreator = (message: string) : SendMessageAction => ({
    type: SEND_MESSAGE,
    message: message
})

export default dialogsReducer;