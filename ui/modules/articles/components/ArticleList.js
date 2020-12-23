import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import * as actions from "../actions";
import ArticleItem from "./ArticleItem";

export default function ArticleList() {
  const {
    query: { category },
    asPath,
  } = useRouter();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const isLoading = useSelector((state) => state.articles.isLoading);

  useEffect(() => {
    if (asPath === "/articles") {
      dispatch(actions.fetchArticles());
    } else if (category) {
      dispatch(actions.fetchArticles(category));
    }
  }, [category]);

  if (isLoading) {
    return Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} animation="wave" />
    ));
  }

  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </Grid>
  );
}
