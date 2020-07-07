// The top bar of the website

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                [Site Name]
            </Link>

            <div className="right menu">
                <Link to="/" className="item">
                    Log In
                </Link>
            </div>
        </div>
    );
};

export default Header;
