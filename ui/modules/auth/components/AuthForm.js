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
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RouterLink from "next/link";

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

export default function AuthForm({
  title,
  submitText,
  onSubmit,
  altText,
  altLink,
}) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
      })
    ),
  });

  const submit = (credentials) => onSubmit(credentials);

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
            type="email"
            label="Email"
            placeholder="Enter email"
            name="email"
            fullWidth
            helperText={errors.email?.message || ""}
            error={!!errors.email}
          ></TextField>
          <TextField
            inputRef={register}
            variant="outlined"
            type="password"
            label="Password"
            placeholder="Enter password"
            name="password"
            fullWidth
            helperText={errors.password?.message || ""}
            error={!!errors.password}
          ></TextField>
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
          <RouterLink href={altLink} passHref>
            <Button
              variant="outlined"
              color="primary"
              className={classes.submitBtn}
            >
              {altText}
            </Button>
          </RouterLink>
        </CardActions>
      </Card>
    </form>
  );
}
