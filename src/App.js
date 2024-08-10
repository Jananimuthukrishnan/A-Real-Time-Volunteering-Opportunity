import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './Landing/Landing';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import LoginModal from './Modal/LoginModal';
import SigninModal from './Modal/SigninModal';
import Donate from './Donate/Donate';
import About from './About/About';
import Event from './Events/Event';
import Contact from './Contact/Contact';
import Apply from './Apply/Apply';
import Payment from './Pay/Payment';
import Dashboard from './Dashboard/Dashboard';
import VolunteerDashboard from './Dashboard/Volunteerdashboard';
import Eventdashboard from './Dashboard/Eventdashboard';
import AdminLogin from './Modal/AdminLogin';
import DonateNow from './Donate/DonateNow';
import Feedback from './Dashboard/Feedback';
import Rewards from './Dashboard/Rewards';

function NavbarContainer({ openLoginModal }) {
  const location = useLocation();
  const noNavbarPaths = ['/dashboard', '/vmdashboard', '/emdashboard','/feedback','/rewards'];

  return !noNavbarPaths.includes(location.pathname) ? <Navbar openModal={openLoginModal} /> : null;
}

function FooterContainer() {
  const location = useLocation();
  const noFooterPaths = ['/dashboard', '/vmdashboard', '/emdashboard','/feedback','/rewards'];

  return !noFooterPaths.includes(location.pathname) ? <Footer /> : null;
}

function App() {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signinModalIsOpen, setSigninModalIsOpen] = useState(false);
  const [adminLoginIsOpen, setAdminLoginIsOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
    setSigninModalIsOpen(false);
    setAdminLoginIsOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const openSigninModal = () => {
    setSigninModalIsOpen(true);
    setLoginModalIsOpen(false);
    setAdminLoginIsOpen(false);
  };

  const closeSigninModal = () => {
    setSigninModalIsOpen(false);
  };

  const openAdminLogin = () => {
    setAdminLoginIsOpen(true);
    setLoginModalIsOpen(false);
    setSigninModalIsOpen(false);
  };

  const closeAdminLogin = () => {
    setAdminLoginIsOpen(false);
  };

  return (
    <Router>
      <NavbarContainer openLoginModal={openLoginModal} />
      <LoginModal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        openSigninModal={openSigninModal}
        openAdminLogin={openAdminLogin}
      />
      <SigninModal
        isOpen={signinModalIsOpen}
        onRequestClose={closeSigninModal}
        openLoginModal={openLoginModal}
        openAdminLogin={openAdminLogin}
      />
      <AdminLogin
        isOpen={adminLoginIsOpen}
        onRequestClose={closeAdminLogin}
        openSigninModal={openSigninModal}
        openLoginModal={openLoginModal}
      />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/landing" element={<Landing />}/>
        <Route path="/donate" element={<Donate />}/>
        <Route path="/donatenow" element={<DonateNow />}/>
        <Route path="/organization" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vmdashboard" element={<VolunteerDashboard />} />
        <Route path="/emdashboard" element={<Eventdashboard />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
      <FooterContainer />
    </Router>
  );
}

export default App;
