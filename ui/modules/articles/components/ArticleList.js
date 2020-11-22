import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article}></ArticleItem>
      ))}
    </ul>
  );
}

export default ArticleList;
