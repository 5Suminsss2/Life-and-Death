import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Gallery from './pages/Gallery';
import Main from './pages/Main';
import Select from './pages/Select';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/select" element={<Select />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
