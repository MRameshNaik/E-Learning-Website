import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginSignUp from './pages/LoginSignUp';
import Courses from './pages/Courses';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './components/Footer/Footer';

export default function Routing() {
    return (
      <div className="rout">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }