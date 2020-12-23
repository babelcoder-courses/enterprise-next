import { useDispatch, useSelector } from "react-redux";
import { Link, Button } from "@material-ui/core";
import RouterLink from "next/link";
import { useRouter } from "next/router";

import axios from "lib/axios";
import * as actions from "../actions";

function ArticleDetails() {
  const dispatch = useDispatch();
  const {
    query: { id },
  } = useRouter();
  const article = useSelector((state) => state.articles.items[0]);

  const remove = () => {
    dispatch(actions.removeArticle(id));
  };

  return (
    <>
      <div>{article.title}</div>
      <RouterLink href={`/articles/${id}/edit`} passHref>
        <Link>Edit</Link>
      </RouterLink>
      <Button onClick={remove}>Delete</Button>
    </>
  );
}

export default ArticleDetails;
