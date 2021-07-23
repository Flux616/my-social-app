const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Gwyn'},
        {id: 2, name: 'Artorias'},
        {id: 3, name: 'Gwynewere'},
        {id: 4, name: 'Solar'},
        {id: 5, name: 'Firekeeper'},
        {id: 6, name: 'Sigward'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
                case SEND_MESSAGE:
            return stateCopy = {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: action.message}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (message) => ({type: SEND_MESSAGE, message: message})

export default dialogsReducer;