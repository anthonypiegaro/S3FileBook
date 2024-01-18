import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import PDF from './components/PDF/PDF';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pdf" element={<PDF />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
