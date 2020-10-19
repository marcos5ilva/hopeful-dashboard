import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import fakeAPI from './services/fakeApi';

const Store = ({ children }) => {
    const [userInfo, setUserInfo] = useState({ id: '', name: '', socialmedia: { instagram: {}, twitter: {}, facebook: {}, linkedin: {} } });

    useEffect(() => {
        const dataInfo = fakeAPI.getUserInfo();


        setUserInfo(dataInfo);
        console.log(dataInfo);
    }, []);

    return (
        <UserContext.Provider value={userInfo}>
            { children}
        </UserContext.Provider >
    );
}

export default Store;