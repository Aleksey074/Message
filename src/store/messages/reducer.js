import { ADD_MESSAGE, CLEAR_MESSAGES_FOR_CHAT, INIT_MESSAGES_FOR_CHAT } from "./actions";

export const initialState = {}; // описываем изначальное состояния  


//cама ф-ия редьюсер: в момент иниц-ии изначальное состояние =  initialState + принимается  action
export const messagesReducer = (state = initialState, {type, payload}) => {  //acton деструктир. на {type, payload}
    switch (type) {

        case ADD_MESSAGE : {
            return {
                ...state,
                 [payload.chatId]: [...state[payload.chatId], payload.newMsg], //берём старый state и id чата + новое соощение доб.
        };
    }
        
        case INIT_MESSAGES_FOR_CHAT: {
            return {
                ...state,
                [payload] : [],
            };
        }
        
        case CLEAR_MESSAGES_FOR_CHAT: {
                const copy = {...state}
                delete copy[payload];

                return copy
        }

        default:
        return state; // если ничего не подошло - дефолт (state)
    }}