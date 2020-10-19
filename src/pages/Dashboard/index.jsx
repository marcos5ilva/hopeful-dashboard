import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fakeAPI from '../../services/fakeApi';

import Store from '../../Store';
import Donations from '../../components/Donations';
import Posts from '../../components/Posts';
import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import Metrics from '../../components/Metrics';
import './styles.css'

const Dashboard = () => {


    const [userInfo, setUserInfo] = useState({});
    const [socialInfo, setSocialInfo] = useState([]);

    useEffect(() => {
        const dataInfo = fakeAPI.getUserInfo();
        const dataSocial = fakeAPI.getSocialInfo();

        setUserInfo(dataInfo);
        setSocialInfo(dataSocial);


    }, []);

    return (
        <>
            <Store>
                <Header />
                <div className="dashboard-container">
                    <Metrics />
                    <Highlights />
                    <Posts />
                    <Donations />
                </div>
            </Store>
        </>
    );
}

export default Dashboard;