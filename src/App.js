import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import ArticleListPage from "./pages/ArticleListPage/index.jsx";
import ArticlePage from "./pages/ArticlePage/index.jsx";
import HomePage from "./pages/HomePage/index.jsx";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
