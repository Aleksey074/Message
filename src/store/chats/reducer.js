import { ADD_CHAT, DELETE_CHAT } from "./actions";


export const initialState = []; // описываем изначальное состояния  


//cама ф-ия редьюсер: в момент иниц-ии изначальное состояние =  initialState + принимается  action
export const chatsReducer = (state = initialState, {type, payload}) => {  //acton деструктир. на {type, payload}
    switch (type) {

        case ADD_CHAT: {
            return [...state, payload]; //склеиваем изначально пустой массив с новым чатом
        }
        
        case DELETE_CHAT: {
            return state.filter( ({id}) => id !== payload); //фильтруем, чтобы не попал чат с переданным на удаление id (из payload)
        }

        default:
        return state; // если ничего не подошло - дефолт (state)
    }
}