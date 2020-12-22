import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import ArticleForm from "./ArticleForm";
import axios from "lib/axios";

export default function EditArticle() {
  const [article, setArticle] = useState(null);
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const loadArticle = async () => {
    const res = await axios.get(`/articles/${id}`);

    setArticle(res.data);
  };

  const editArticle = async (article) => {
    await axios.patch(`/articles/${id}`, article);

    router.push(`/articles/${id}`);
  };

  useEffect(() => {
    if (id) loadArticle();
  }, [id]);

  return (
    article && (
      <ArticleForm
        type="EDIT"
        submitText="Update"
        title="Edit Article"
        article={article}
        onSubmit={editArticle}
      ></ArticleForm>
    )
  );
}
