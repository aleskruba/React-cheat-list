import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReadParams from './components/ReadParams';

function App() {



  return (
    <Router>
    <Routes>
      {/* Define a route with a path that includes the id parameter */}
      <Route path="/" element={<ReadParams />} />
    </Routes>
  </Router>
  );
}

export default App;
