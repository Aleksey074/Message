import { apiUrl } from "../../utils/constants";

export const GET_ARTICLES_REQUEST = "ARTICLES::GET_ARTICLES_REQUEST";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";


export const getArticlesRequest = () => ({
  type: GET_ARTICLES_REQUEST
})

export const getArticlesSuccess = (data) => ({ //data - список статей
  type: GET_ARTICLES_SUCCESS,
  payload: data,
})


export const getArticlesFailure = (error) => ({  //сюда будет приходить ошибка
  type: GET_ARTICLES_FAILURE,
  payload: error,
})

export const getArticles = () => async (dispatch) => {
  try {
    dispatch(getArticlesRequest()); //сообщаем, что пошла загрузка

    const response = await fetch(apiUrl);  //получаем объект response  + получение данных их объекта json
    if (!response.ok) {
      throw new Error(`Response failed with status${response.status}`)
    }

    const result = await response.json();
    dispatch(getArticlesSuccess(result)); //если запрос завершился успешно, то resule - в State
  } catch (error) {
    dispatch(getArticlesFailure(error.message))
  }

}