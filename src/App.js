
import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import MiniPlay from './MiniPlay'
import SystemUser from './SystemUser'

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
          <Route path="/miniplay" component={MiniPlay} />
          <Route path="/systemuser" component={SystemUser} />
          <Route exact path="/">
            <h1>Главная страница</h1>
            <p>Основной контент</p>
          </Route>
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

