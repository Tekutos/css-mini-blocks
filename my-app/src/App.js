import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SlideTemplatePage from "./pages/SlideTemplatePage.jsx/SlideTemplatePage";
import MainPage from "./pages/MainPage";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slidetemplate" element={<SlideTemplatePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
