import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/main.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Header from './sections/Header';
import Footer from './sections/Footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
