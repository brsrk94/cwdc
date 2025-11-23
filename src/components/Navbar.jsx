import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(5, 5, 5, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 100
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>
                    CWDC<span style={{ color: 'var(--text-secondary)' }}>Directory</span>
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/cybersecurity" className="nav-link">Cybersecurity</Link>
                    <Link to="/webdev" className="nav-link">Web Dev</Link>
                    <Link to="/datascience" className="nav-link">Data Science</Link>
                    <Link to="/competitive" className="nav-link">Comp Coding</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
