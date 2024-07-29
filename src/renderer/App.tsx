import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Study from '../pages/Study/Study';
import { GlobalConfigProvider } from './components/provider/GlobalConfigProvider';

const App = () => {
  return (
    <GlobalConfigProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Study />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/study" element={<Study />} /> */}
        </Routes>
      </Router>
    </GlobalConfigProvider>
  );
};

export default App;
