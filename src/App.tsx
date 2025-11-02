import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import AssessmentPage from './pages/AssessmentPage';
import DashboardPage from './pages/DashboardPage';
import ScenariosListPage from './pages/ScenariosListPage';
import ScenarioPage from './pages/ScenarioPage';
import ProgressPage from './pages/ProgressPage';
import ProfilePage from './pages/ProfilePage';
import LibraryPage from './pages/LibraryPage';
import SkillsOverviewPage from './pages/SkillsOverviewPage';
import SkillCategoryPage from './pages/SkillCategoryPage';
import SkillDetailPage from './pages/SkillDetailPage';
import SkillsNetworkPage from './pages/SkillsNetworkPage';
import SkillEnginePage from './pages/SkillEnginePage';
import TopicPage from './pages/TopicPage';
import SubtopicPage from './pages/SubtopicPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/scenarios" element={<ScenariosListPage />} />
          <Route path="/scenarios/:id" element={<ScenarioPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/library/skills" element={<SkillsOverviewPage />} />
          <Route path="/library/skills/network" element={<SkillsNetworkPage />} />
          <Route path="/library/skills/category/:categoryId" element={<SkillCategoryPage />} />
          <Route path="/library/skills/:skillId" element={<SkillDetailPage />} />
          <Route path="/skill-engine" element={<SkillEnginePage />} />
          <Route path="/topics/:topicSlug" element={<TopicPage />} />
          <Route path="/topics/:topicSlug/:subtopicSlug" element={<SubtopicPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;