import { Link, Button } from "@material-ui/core";
import RouterLink from "next/link";
import { useRouter } from "next/router";

import axios from "lib/axios";

function ArticleDetails({ title }) {
  const router = useRouter();

  const remove = async () => {
    await axios.delete(`/articles/${router.query.id}`);

    router.push("/articles");
  };

  return (
    <>
      <div>{title}</div>
      <RouterLink href={`/articles/${router.query.id}/edit`} passHref>
        <Link>Edit</Link>
      </RouterLink>
      <Button onClick={remove}>Delete</Button>
    </>
  );
}

export default ArticleDetails;
