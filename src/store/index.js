import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import thunk from "redux-thunk";
import { articlesReducer } from "./articles/reducer";

const persistConfig = {  //это {}, показывающий как храним данные
    key: "myMessenger",
    storage, //куда сохраняем
};


const rootReducer = combineReducers({  //корневой reducer
    profile: profileReducer,   // название раздела: фи-я reducer для раздела
    chats: chatsReducer,
    messages: messagesReducer,
    articles: articlesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;  //подключение DEVTOOLS


export const store = createStore(
    persistedReducer, // вместо корневого reduce  - здесь теперь сохраняемый
    composeEnhancers(applyMiddleware(thunk)), // подключению thunk
);


export const persistor = persistStore(store);  //этот store хранит данные
