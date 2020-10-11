import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from "../../UserContext";
import Donations from '../../components/Donations';
import Posts from '../../components/Posts';
import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import Metrics from '../../components/Metrics';
import './styles.css'

const Dashboard = () => {

    return (
        <>
            <UserContext.Provider value="User context">
                <Header />
                <div className="dashboard-container">
                    <Metrics />
                    <Highlights />
                    <Posts />
                    <Donations />
                </div>
            </UserContext.Provider>
        </>
    );
}

export default Dashboard;