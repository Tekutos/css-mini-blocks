import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SlideTemplatePage from "./pages/SlideTemplatePage.jsx/SlideTemplatePage";
import MainPage from "./pages/MainPage";
import Blog from "./components/Blog/Blog";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slidetemplate" element={<SlideTemplatePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/cardlist" element={<CardList />} />
    </Routes>
  );
}

export default App;
