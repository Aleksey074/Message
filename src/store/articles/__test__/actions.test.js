import { GET_ARTICLES_REQUEST, getArticlesRequest } from "../actions";

describe("getArticlesRequest", () => {
    it("return obj with predefined type", () => {
        const expected = {   //ожидается {} с типом  GET_ARTICLES_REQUEST
            type: GET_ARTICLES_REQUEST,
        }

        const received = getArticlesRequest(); //полученный результат = рез-т вызова getArticlesRequest

        expect(received).toEqual(expected); //если received !=== expected, тогда error

    })
})