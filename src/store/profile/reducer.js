import { TOGGLE_CHECKBOX } from "./actions";


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
        default:
        return state; // если ничего не подошло - дефолт (state)
    }
}