import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Auth } from './components/menu/Auth';
import { GlobalConfigProvider } from './components/provider/GlobalConfigProvider';

export default function App() {
  return (
    <GlobalConfigProvider children={
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </Router>
      }
    >
  </GlobalConfigProvider>);
}
