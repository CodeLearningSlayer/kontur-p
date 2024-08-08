import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Menu from '../pages/Menu/Menu';
import Study from '../pages/Study/Study';
import { GlobalConfigProvider } from './components/provider/GlobalConfigProvider';
import Auth from '../pages/Menu/Auth/Auth';
import { User } from '../pages/Menu/Auth/AuthViewModel';
import Test from '../pages/Study/Test';

export const AppContext = React.createContext<User>({
  name: '',
  course: 0,
  troop: 0,
});

const App = () => {
  const [user, setContextUser] = useState<User>({
    name: '',
    course: 0,
    troop: 0,
  });
  return (
    <GlobalConfigProvider value={user}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Auth setContextUser={setContextUser} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/study" element={<Study />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </HashRouter>
    </GlobalConfigProvider>
  );
};

export default App;
