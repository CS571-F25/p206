import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Destinations from "./components/Destinations";
import NavbarMenu from "./components/NavbarMenu";
import Footer from "./components/Footer";

// ⭐ 新增：Favorites 页面
import Favorites from "./components/Favorites";

// ⭐ 新增：ScrollToTopButton
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <HashRouter>
      <NavbarMenu />

      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<AboutMe />} />

          {/* ⭐ 新增：收藏页面路由 */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        {/* ⭐ 回到顶部按钮（所有页面显示） */}
        <ScrollToTopButton />

        {/* 页面最底部 Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
