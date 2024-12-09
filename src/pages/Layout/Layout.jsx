import React from 'react';
import CardLayout from '../../components/CardLayout/CardLayout';
import VerifyEmail from '../../components/VerifyEmail/VerifyEmail';
import Navbar from '../../components/Navbar/Navbar';
import './layout.css'; 
import Footer from '../../components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="layout-container">
        <div className="left-panel">
          <CardLayout />
        </div>
        <div className="right-panel">
          <VerifyEmail />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
