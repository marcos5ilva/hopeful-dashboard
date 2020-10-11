import React from 'react';
import { Link } from 'react-router-dom';
import Donations from '../../components/Donations';

import Posts from '../../components/Posts';
import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import Metrics from '../../components/Metrics';
import './styles.css'

const Dashboard = () => {

    return (
        <>
            <Header />
            <div className="container">
                <Metrics />
                <Highlights />
                <Posts />
                <Donations />
            </div>
        </>
    );
}

export default Dashboard;