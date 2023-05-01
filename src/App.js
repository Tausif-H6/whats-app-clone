
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="app__body">
        <Router>
        <Sidebar />
           <Routes>
            <Route path="/rooms/:roomId" element={<Chat />}/>
            <Route path='/' element={<Chat />}/>
            </Routes>
        </Router>

      </div>

    </div>
  );
}

export default App;
