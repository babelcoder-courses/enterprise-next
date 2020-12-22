import { useRouter } from "next/router";

import ArticleForm from "./ArticleForm";
import axios from "lib/axios";

export default function NewArticle() {
  const router = useRouter();

  const createArticle = async (article) => {
    await axios.post("/articles", article);

    router.push("/articles");
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
