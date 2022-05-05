import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Main from './pages/Main';
import Select from './pages/Select';
import Source from './pages/Source';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/source" element={<Source />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
