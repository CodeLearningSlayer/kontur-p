import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import 'tailwindcss/tailwind.css';
import Menu from '../pages/Menu/Menu';
import Study from '../pages/Study/Study';
import CamouflageLayout from '../layouts/CamouflageLayout';

const Start = () => {
  return (
    <CamouflageLayout>
      <div className="main-container">
        <div className="main-container__inner">
          <img width="200" alt="icon" src={icon} />
        </div>
        <Link to="/menu">Авторизация</Link>
      </div>
    </CamouflageLayout>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </Router>
  );
};

export default App;
