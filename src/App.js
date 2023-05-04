
import { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './SateProvider';
function App() {

  const[{user},dispatch]= useStateValue();//Pulling info from data layer
  return (
    <div className="App">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path='/' element={<Chat />} />
            </Routes>
          </Router>

        </div>
       )} 


    </div>
  );
}

export default App;
