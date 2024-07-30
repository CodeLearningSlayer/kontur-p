import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Menu from '../pages/Menu/Menu';
import Study from '../pages/Study/Study';
import { Auth } from './components/menu/Auth';
import { GlobalConfigProvider } from './components/provider/GlobalConfigProvider';
import React, { useState } from 'react';
import { User } from './components/menu/AuthViewModel';

export const AppContext = React.createContext<User>({ name: "", course: 0, troop: 0 })

const App = () => {
  const [user, setContextUser] = useState<User>({ name: "", course: 0, troop: 0 })
  return (
    <GlobalConfigProvider valuse={user}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Auth setContextUser={setContextUser}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/study" element={<Study />} />
        </Routes>
      </HashRouter>
    </GlobalConfigProvider>
  );
};

export default App;
