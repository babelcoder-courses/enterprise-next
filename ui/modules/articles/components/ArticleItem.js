import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  card: {
    height: "100%",
  },
  cardArea: {
    height: "100%",
    flexDirection: "column",
  },
  media: {
    height: 140,
  },
});

export default function ArticleItem({ id, title, body, image, user }) {
  const classes = useStyles();
  const router = useRouter();

  const navigateToArticleDetails = () => {
    router.push(`/articles/${id}`);
  };

  return (
    <Grid item xs={12} md={4} className={classes.root}>
      <Card className={classes.card} onClick={navigateToArticleDetails}>
        <CardActionArea className={classes.cardArea}>
          <CardHeader
            avatar={<Avatar src={user.image}></Avatar>}
            title={user.name}
          ></CardHeader>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
