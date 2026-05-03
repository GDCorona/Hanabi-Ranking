import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Demonlist from './pages/Demonlist';
import Demoninfo from './pages/Demoninfo';
import Waifu from './pages/Waifu';
import About from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="demonlist" element={<Demonlist />} />
        <Route path="demoninfo" element={<Demoninfo />} />
        <Route path="waifu" element={<Waifu />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
