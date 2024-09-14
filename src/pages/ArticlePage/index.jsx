import styles from "../../pages/ArticlePage/styles.module.css";
import articlesData from "../../data/articlesData.js";
import { useParams, useNavigate } from "react-router-dom";

function ArticlePage() {
  const { id } = useParams();
  const article = articlesData.find((a) => a.id === parseInt(id, 10));
  const navigate = useNavigate();

  return (
    <div className={styles.articleContainer}>
      <h2>{article?.title}</h2>
      <p>{article?.content}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ArticlePage;
