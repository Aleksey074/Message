export const AUTHORS = {
    human: "Я",
    robot: "Робот",
}

export const apiUrl = "https://api.spaceflightnewsapi.net/v3/articles";

export const FETCH_STATUSES = {
    IDLE: "idle", // ещё ничего не идёт
    REQUEST: "request", //идёт запрос
    FAILURE: "failure", //запрос завершился с ошибкой
    SUCCESS: "success", // запрос завершился успешно
}