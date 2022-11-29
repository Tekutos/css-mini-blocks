import "./App.scss";
import { Route, Routes } from "react-router-dom";
import SlideTemplatePage from "./pages/SlideTemplatePage.jsx/SlideTemplatePage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slidetemplate" element={<SlideTemplatePage />} />
    </Routes>
  );
}

export default App;
