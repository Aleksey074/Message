import { useEffect } from "react";
import { CircularProgress } from "@mui/material"
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATUSES } from "../../utils/constants";
import Button from "@mui/material/Button";
import  "./articles.css";


export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);



    const sendRequest =  () => {
        dispatch(getArticles())
    }

    useEffect(() => {  //чтобы список статей появлялся без нажатия на кнопку
        sendRequest();
    }, []);


    return (

        <>
            <h1>Новости:</h1>

            {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
            {error && <h1>{error}</h1>} 

            <ul className="articles-wrap">
                {articles.map((article) => (
                    <li className="articles-item" key={article.id}>{article.title}</li>
                ))}
            </ul>

            <button onClick={sendRequest} className="articles-btn">Обновить!</button>

        </>
    )
}