import Link from "next/link";

function ArticleItem({ id, title }) {
  return (
    <li>
      <Link href={`/articles/${id}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

export default ArticleItem;
