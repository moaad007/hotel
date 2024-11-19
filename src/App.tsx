import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Rooms } from './components/Rooms';
import { Bills } from './components/Bills';
import { Needs } from './components/Needs';
import { RoomDetail } from './components/RoomDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/needs" element={<Needs />} />
          <Route path="/room/:id" element={<RoomDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;