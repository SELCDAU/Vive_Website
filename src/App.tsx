import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DataDeletion from './pages/DataDeletion';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
  </Router>
  );
}

export default App;
