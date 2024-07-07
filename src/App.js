/* eslint-disable */
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import MiniPlay from './MiniPlay/MiniPlay'
import SystemUser from './System/SystemUser'
import HomePage from './home/HomePage';
import Market from './market/Market';

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/miniplay" element={<MiniPlay />} />
          <Route path="/systemuser" element={<SystemUser />} />
          <Route path="/homepage" element={<HomePage/>} /> 
          <Route path="/exchanger" element={<Exchanger />} />
          <Route path="/user" element={<User />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/market" element={<Market />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

