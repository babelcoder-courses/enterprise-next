import { wrapper } from "modules/store";
import * as actions from "modules/articles/actions";
import ArticleDetails from "modules/articles/components/ArticleDetails";

export default function ArticlePage() {
  return <ArticleDetails></ArticleDetails>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ params, store }) => {
    await store.dispatch(actions.fetchArticle(params.id));
  }
);
