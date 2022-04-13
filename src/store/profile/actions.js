export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX"; //чек-бокс
export const SET_NAME = "PROFILE::SET_NAME";  //смена имени

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,  //указываем тип для уник. идентификации
}

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
});