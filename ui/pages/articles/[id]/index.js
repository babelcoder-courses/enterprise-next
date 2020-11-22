import axios from "lib/axios";
import ArticleDetails from "modules/articles/components/ArticleDetails";

export default function ArticlePage({ article }) {
  return <ArticleDetails {...article}></ArticleDetails>;
}

export const getStaticPaths = async () => {
  const { data: articles } = await axios.get("/articles");
  const paths = articles.map((article) => ({
    params: { id: `${article.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data: article } = await axios.get(`/articles/${params.id}`);

  return {
    props: { article },
  };
};
