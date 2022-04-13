import { TOGGLE_CHECKBOX } from "./actions";
import { SET_NAME } from "./actions";


export const initialState = {
    showName: false,
    name: "Алексей Донской"
} // описываем изначальное состояния  


//cама ф-ия редьюсер: в момент иниц-ии изначальное состояние =  initialState + принимается  action
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX: {
            return {
                ...state,  //берем state
                showName: !state.showName, //и меняем showName на противоположный
            };
        }
        case SET_NAME: {
            return {
                ...state,  //берем state
                name: action.payload // и записываем новое имя
            };
        }
        default:
        return state; // если ничего не подошло - дефолт (state)
    }
}