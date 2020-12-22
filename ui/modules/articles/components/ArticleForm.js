import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  selectControl: {
    width: "100%",
  },
  submitBtn: {
    flex: 1,
  },
}));

export default function ArticleForm({
  type,
  title,
  submitText,
  article,
  onSubmit,
}) {
  const classes = useStyles();
  const validationSchema =
    type === "CREATE"
      ? yup.object().shape({
          title: yup.string().required(),
          body: yup.string().required(),
          image: yup.string().url().required(),
          category: yup.string().required(),
        })
      : yup.object().shape({
          title: yup.string(),
          body: yup.string(),
          image: yup.string().url(),
          category: yup.string(),
        });
  const { register, handleSubmit, errors, setValue } = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
    defaultValues: article,
  });

  const submit = (article) => onSubmit(article);

  return (
    <form onSubmit={handleSubmit(submit)} autoComplete="off">
      <Card>
        <CardContent className={classes.form}>
          <Typography variant="h5" component="h2" align="center">
            {title}
          </Typography>
          <TextField
            inputRef={register}
            variant="outlined"
            label="Title"
            placeholder="Enter article title"
            name="title"
            fullWidth
            helperText={errors.title?.message || ""}
            error={!!errors.title}
          ></TextField>
          <TextField
            inputRef={register}
            variant="outlined"
            label="Body"
            placeholder="Enter article body"
            name="body"
            fullWidth
            helperText={errors.body?.message || ""}
            error={!!errors.body}
          ></TextField>
          <TextField
            inputRef={register}
            variant="outlined"
            label="Image"
            placeholder="Enter article image"
            name="image"
            fullWidth
            helperText={errors.image?.message || ""}
            error={!!errors.image}
          ></TextField>
          <FormControl className={classes.selectControl}>
            <InputLabel id="article-category">
              Select article category
            </InputLabel>
            <Select
              id="article-category"
              defaultValue={article?.category || ""}
              onChange={(event) => setValue("category", event.target.value)}
              inputProps={{
                inputRef: (ref) => {
                  if (!ref) return;

                  register("category");
                },
              }}
            >
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="it">IT</MenuItem>
              <MenuItem value="music">Music</MenuItem>
              <MenuItem value="travel">Travel</MenuItem>
              <MenuItem value="relax">Relax</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
          >
            {submitText}
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
