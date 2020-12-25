import * as faker from "faker";
import MockAdapter from "axios-mock-adapter";

import mockStore from "modules/store.test";
import axios from "lib/axios";
import * as articlesActions from "./actions";

const mockAxios = new MockAdapter(axios);

describe("articles actions", () => {
  describe("fetchArticle", () => {
    it("loads article with id correctly", async () => {
      const id = 1;
      const store = mockStore({});
      const article = { id: 1, title: faker.lorem.sentence() };

      mockAxios.onGet(`/articles/${id}`).reply(200, article);

      await store.dispatch(articlesActions.fetchArticle(id));

      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: articlesActions.FETCH_ARTICLE_REQUEST,
      });
      expect(actions[1]).toEqual({
        type: articlesActions.FETCH_ARTICLE_SUCCESS,
        payload: { article },
      });
    });
  });
});
