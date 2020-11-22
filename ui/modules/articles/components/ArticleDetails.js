import { useRouter } from "next/router";

function ArticleDetails({ title }) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;
  return <div>{title}</div>;
}

export default ArticleDetails;
