import React from 'react';
import {CardLayout }from '../../components/CardLayout/CardLayout';
import OTPVerification from '../../components/OTPVerification/OTPVerification';
import EmailInput from '../EmailInput/EmailInput';

const Home = () => {
    return (
        <div className="home">
            <div className="left-pane">
                <CardLayout />
            </div>
            <div className="right-pane">
                <OTPVerification />
                <EmailInput/>
            </div>
        </div>
    );
};

export default Home;
