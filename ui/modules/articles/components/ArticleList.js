import { useState, useEffect } from "react";
import axios from "lib/axios";

import ArticleItem from "./ArticleItem";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data: articles } = await axios.get("/articles");

    setArticles(articles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article}></ArticleItem>
      ))}
    </ul>
  );
}

export default ArticleList;
