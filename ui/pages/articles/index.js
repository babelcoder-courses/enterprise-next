import axios from "lib/axios";
import ArticleList from "modules/articles/components/ArticleList";

export default function HomePage({ articles }) {
  return <ArticleList articles={articles}></ArticleList>;
}

export const getServerSideProps = async () => {
  const { data: articles } = await axios.get("articles");

  return {
    props: {
      articles,
    },
  };
};
