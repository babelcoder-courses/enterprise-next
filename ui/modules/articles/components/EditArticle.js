import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import ArticleForm from "./ArticleForm";
import * as actions from "../actions";

export default function EditArticle() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.items[0]);
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const editArticle = (article) => {
    dispatch(actions.editArticle(id, article));
  };

  useEffect(() => {
    if (id) dispatch(actions.fetchArticle(id));
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
