import React from 'react';
import SignUP from '../SignUp/SignUP';
import Navbar from "../../components/Navbar/Navbar"
const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="right-pane">
                <SignUP/>
            </div>
        </div>
    );
};

export default Home;
