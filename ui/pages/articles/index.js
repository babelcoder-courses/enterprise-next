import axios from "lib/axios";
import ArticleList from "modules/articles/components/ArticleList";

export default function HomePage({ articles }) {
  return <ArticleList articles={articles}></ArticleList>;
}

export const getServerSideProps = async ({ query: { category } }) => {
  const path = category ? `/articles?category=${category}` : "/articles";
  const { data: articles } = await axios.get(path);

  return {
    props: {
      articles,
    },
  };
};
