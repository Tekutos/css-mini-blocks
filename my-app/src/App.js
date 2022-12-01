import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SlideTemplatePage from "./pages/SlideTemplatePage/SlideTemplatePage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import CardListPage from "./pages/CardListPage/CardListPage.jsx";
import DoubleBlockPage from "./pages/DoubleBlockPage/DoubleBlockPage.jsx";
import SlideTemplatePage2 from "./pages/SlideTemplatePage2/SlideTemplatePage2";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slidetemplate" element={<SlideTemplatePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/cardlist" element={<CardListPage />} />
      <Route path="/doubleblock" element={<DoubleBlockPage />} />
      <Route path="/slidetemplate2" element={<SlideTemplatePage2 />} />
    </Routes>
  );
}

export default App;
