import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SlideTemplatePage from "./pages/SlideTemplatePage/SlideTemplatePage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import CardListPage from "./pages/CardListPage/CardListPage.jsx";
import DoubleBlockPage from "./pages/DoubleBlockPage/DoubleBlockPage.jsx";
// import SlideTemplatePage from "./pages/SlideTemplatePage.jsx/SlideTemplatePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slidetemplate" element={<SlideTemplatePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/cardlist" element={<CardListPage />} />
      <Route path="/doubleblock" element={<DoubleBlockPage />} />
      {/* <Route path="/doubleblock" element={<DoubleBlock />} /> */}
    </Routes>
  );
}

export default App;
