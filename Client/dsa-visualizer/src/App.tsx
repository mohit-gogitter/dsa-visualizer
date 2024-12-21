import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Sidebar from './components/Sidebar.tsx';
import Home from './pages/Home.tsx';
import Sorting from './pages/Sorting.tsx';
import Searching from './pages/Searching.tsx';
import Pathfinding from './pages/Pathfinding.tsx';
import Trees from './pages/Trees.tsx';
import LinkedList from './pages/LinkedList.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex font-onest">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/searching" element={<Searching />} />
            <Route path="/pathfinding" element={<Pathfinding />} />
            <Route path="/trees" element={<Trees />} />
            <Route path="/linked-list" element={<LinkedList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
