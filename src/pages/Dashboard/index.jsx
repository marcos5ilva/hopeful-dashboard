import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fakeAPI from '../../services/fakeApi';
import { UserContext } from "../../UserContext";
import Donations from '../../components/Donations';
import Posts from '../../components/Posts';
import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import Metrics from '../../components/Metrics';
import './styles.css'

const Dashboard = () => {


    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const data = fakeAPI;
        console.log(data)
        setUserInfo(data);

    }, []);

    return (
        <>
            <UserContext.Provider value={{ userInfo, setUserInfo }}>
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