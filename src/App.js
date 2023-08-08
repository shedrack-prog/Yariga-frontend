import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import ProfilePage from './pages/profile';
import Dashboard from './pages/dashboard';
import PropertyPage from './pages/property';
import AgentPage from './pages/agent';
import ReviewPage from './pages/review';
import MessagesPage from './pages/messages';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function setTheme() {
      let mode = localStorage.getItem('theme') || null;

      const htmlELement = document.getElementById('root');
      htmlELement.classList.add(mode);
    }
    setTheme();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<PropertyPage />} />
          <Route path="agents" element={<AgentPage />} />
          <Route path="reviews" element={<ReviewPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
