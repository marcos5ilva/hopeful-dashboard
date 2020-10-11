import React from 'react';
import logo from '../../assets/img/hopefulLogo.png';

import './styles.css'

const Header = () => {

    return (
        <header>
            <img src={logo} alt="Hopeful Logo" />
        </header>

    );
}

export default Header;