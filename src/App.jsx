import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Tools from './pages/Tools';
import PeerMentoring from './pages/PeerMentoring';
import EarlyAlert from './pages/EarlyAlert';
import SelfRegulated from './pages/SelfRegulated';
import BestPractices from './pages/BestPractices';
import Implementation from './pages/Implementation';
import Team from './pages/Team';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/understanding-the-challenge" element={<Challenge />} />
        <Route path="/our-three-tools" element={<Tools />} />
        <Route path="/peer-mentoring-toolkit" element={<PeerMentoring />} />
        <Route path="/early-alert-protocol" element={<EarlyAlert />} />
        <Route path="/self-regulated-learning-guide" element={<SelfRegulated />} />
        <Route path="/best-practices" element={<BestPractices />} />
        <Route path="/implementation-plan" element={<Implementation />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
