import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Presentation from './pages/Presentation';
import Assessment from './pages/Assessment';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/module/:moduleId" element={<Presentation />} />
        <Route path="/assessments/:moduleId" element={<Assessment />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
