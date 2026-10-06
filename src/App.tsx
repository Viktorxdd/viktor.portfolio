import { Route, Routes } from 'react-router'
import HeroPage from './presentation/pages/HeroPage/HeroPage'
import AboutPage from './presentation/pages/AboutPage/AboutPage'
import ProjectsPage from './presentation/pages/ProjectsPage/ProjectsPage'
import ProjectDetailPage from './presentation/pages/ProjectDetailPage/ProjectDetailPage'
import ExperiencePage from './presentation/pages/ExperiencePage/ExperiencePage'
import TechStackPage from './presentation/pages/TechStackPage/TechStackPage'
import ContactPage from './presentation/pages/ContactPage/ContactPage'
import NotFoundPage from './presentation/pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/tech-stack" element={<TechStackPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
