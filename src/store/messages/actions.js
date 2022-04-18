export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const INIT_MESSAGES_FOR_CHAT = "MESSAGES::INIT_MESSAGES_FOR_CHAT";
export const CLEAR_MESSAGES_FOR_CHAT = "MESSAGES::CLEAR_MESSAGES_FOR_CHAT";

export const addMessage = (newMsg, chatId)  => ({ //принимает новый {} сообщ. и id чата, куда его добавить
    type: ADD_MESSAGE,
    payload: {
        newMsg,
        chatId,
    }
})           

export const initMessagesForChat = (chatId) => ({
    type: INIT_MESSAGES_FOR_CHAT,
    payload: chatId,
}) 


export const clearMessages = (chatId) => ({
    type: CLEAR_MESSAGES_FOR_CHAT,
    payload: chatId,
})