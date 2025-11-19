import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Destinations from "./components/Destinations";
import NavbarMenu from "./components/NavbarMenu";

function App() {
  return (
    <HashRouter>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
