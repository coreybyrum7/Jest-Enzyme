import React from 'react';

import Logo from '../../assets/graphics/portfolio.jpeg';

import './styles.scss';

const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;