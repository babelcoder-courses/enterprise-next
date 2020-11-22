import axios from "lib/axios";
import ArticleDetails from "modules/articles/components/ArticleDetails";

export default function ArticlePage({ article }) {
  return <ArticleDetails {...article}></ArticleDetails>;
}

export const getServerSideProps = async ({ params }) => {
  const { data: article } = await axios.get(`/articles/${params.id}`);

  return {
    props: { article },
  };
};
