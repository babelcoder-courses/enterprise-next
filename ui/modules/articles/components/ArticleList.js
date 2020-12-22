import React from "react";
import { Grid } from "@material-ui/core";

import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </Grid>
  );
}
