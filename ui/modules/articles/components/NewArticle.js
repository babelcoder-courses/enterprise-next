import { useDispatch } from "react-redux";

import ArticleForm from "./ArticleForm";
import * as actions from "../actions";

export default function NewArticle() {
  const dispatch = useDispatch();

  const createArticle = async (article) => {
    dispatch(actions.createArticle(article));
  };

  return (
    <ArticleForm
      type="CREATE"
      submitText="Create"
      title="Create Article"
      onSubmit={createArticle}
    ></ArticleForm>
  );
}
