import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import HomePage from './Pages/Homepage';
import ProjectPage from './Pages/Projects';
import ContactPage from './Pages/ContactMe';
import ResumePage from './Pages/Resume';
import MeInfoPage from './Pages/MeInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="ContactMe" element={<ContactPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="MeInfo" element={<MeInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
