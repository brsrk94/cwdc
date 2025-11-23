import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const path = location.pathname;
    const parts = path.split('/').filter(Boolean);

    return (
        <div>
            <h1>
                Index of <Link to="/">/</Link>
                {parts.map((part, index) => {
                    const url = `/${parts.slice(0, index + 1).join('/')}`;
                    return (
                        <span key={index}>
                            <Link to={url}>{part}</Link>/
                        </span>
                    );
                })}
            </h1>
            {children}
            <div className="footer">
                <p>Apache/2.4.41 (Ubuntu) Server at cwdc.directory Port 443</p>
            </div>
        </div>
    );
};

export default Layout;
