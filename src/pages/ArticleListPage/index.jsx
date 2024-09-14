import styles from "../../pages/ArticleListPage/styles.module.css";
import { Link } from "react-router-dom";
import articlesData from "../../data/articlesData.js";

function ArticleListPage() {
  return (
    <div>
      <h1>Articles</h1>
      <ul className={styles.articleList}>
        {articlesData.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleListPage;
