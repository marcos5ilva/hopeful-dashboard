import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import './styles.css'

const Landing = () => {

    return (
        <div>
            <Header />
            <div className="landing-container">
                <div className="buttons-btn">
                    <Link to="/dashboard" className="dashboard">
                        Dashboard
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Landing;