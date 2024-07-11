import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Words from './components/Words';
import Quiz from './components/Quiz';
import Account from './components/Account';
import Record from './components/Record';


function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex flex-1 bg-gray-100 justify-center items-center h-screen">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/Words' element={<Words />} />
              <Route path='/Quiz' element={<Quiz />} />
              <Route path='/Record' element={<Record />} />
              <Route path='/Account' element={<Account />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
