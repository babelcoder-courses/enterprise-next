import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "lib/axios";

function ArticleDetails() {
  const { query } = useRouter();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchArticle = async () => {
    if (!query.id) return;

    const { data: article } = await axios.get(`/articles/${query.id}`);

    setArticle(article);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticle();
  }, [query]);

  if (isLoading) return <div>Loading...</div>;
  return <div>{article.title}</div>;
}

export default ArticleDetails;
