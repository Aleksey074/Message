import { FETCH_STATUSES } from "../../utils/constants";
import { GET_ARTICLES_FAILURE, GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS } from "./actions";


export const initialState = {
    data: [],
    status: FETCH_STATUSES.IDLE,
    error: null,
}; // описываем изначальное состояния  


//cама ф-ия редьюсер: в момент иниц-ии изначальное состояние =  initialState + принимается  action
export const articlesReducer = (state = initialState, { type, payload }) => {  //acton деструктир. на {type, payload}
    switch (type) {

        case GET_ARTICLES_REQUEST: {
            return { ...state, status: FETCH_STATUSES.REQUEST, error: null }; //меняем стутус запроса + сброс ошибки
        }

        case GET_ARTICLES_FAILURE: {
            return { ...state, status: FETCH_STATUSES.FAILURE, error: payload }; //меняем стутус запроса + добавляем ошибку
        }

        case GET_ARTICLES_SUCCESS: {
            return { ...state, status: FETCH_STATUSES.SUCCESS, data: payload }; //если успешно, то в data - payload
        }

        default:
            return state; // если ничего не подошло - дефолт (state)
    }
}