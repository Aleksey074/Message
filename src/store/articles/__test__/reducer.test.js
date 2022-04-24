import { getArticles, getArticlesRequest, getArticlesSuccess } from "../actions";
import { articlesReducer } from "../reducer";
import { FETCH_STATUSES } from "../../../utils/constants";

describe("articles reducer", () => {
    it("sets error to null if if called with request action", () => {  //ставит error = null, если request action
        const result = articlesReducer({
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: "some error",
        },
            getArticlesRequest()
        );

        expect(result.error).toBeNull();
    });
});

describe("getArticles", () => {
    it("dispatches getArticlesReq", () => {
        const mockDispatch = jest.fn();
        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
    });

    it ("dispatches getArticlesSuc with fetch result", async () => {
        const data = [{name:"test"}];
        const mockDispatch = jest.fn();
        fetch.mockResponse(JSON.stringify(data));
        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(data));

    });
});