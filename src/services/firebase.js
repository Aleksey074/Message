import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";



// подключение к проекту Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD-qBZKaBBAX-dDOFcpOcCjooJtdfrx93w",
    authDomain: "mymessenger-263b3.firebaseapp.com",
    projectId: "mymessenger-263b3",
    storageBucket: "mymessenger-263b3.appspot.com",
    messagingSenderId: "754389023984",
    appId: "1:754389023984:web:bf83e5f3cf4621c0509635"
};

// инициализация Firebase (обеспечение со Фронта доступа к Firibase)
const app = initializeApp(firebaseConfig);

//авторизация
export const auth = getAuth(app);

//база данных
export const db = getDatabase(app); //работа с БД (добавление/удаление) - идёт ч/з Ref-ы. Ref - ссылка на участок БД

//регистрация
export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

//авторизация
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
}

//выход из профиля
export const logOut = async () => {
    await signOut(auth);
}

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const getChatRefById = (id) => ref(db, `chats/${id}`);

