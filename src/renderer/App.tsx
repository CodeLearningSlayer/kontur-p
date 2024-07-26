import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';
import Menu from '../pages/Menu/Menu';
import Study from '../pages/Study/Study';
import { Auth } from './components/menu/Auth';
import { GlobalConfigProvider } from './components/provider/GlobalConfigProvider';

const App = () => {
  return (
    <GlobalConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/study" element={<Study />} />
        </Routes>
      </Router>
    </GlobalConfigProvider>
  );
};

export default App;
