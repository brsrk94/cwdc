import React from 'react';
import DirectoryTable from '../components/DirectoryTable';

const Home = () => {
    const items = [
        { name: 'cybersecurity/', path: '/cybersecurity', type: 'dir', date: '2023-11-23 09:15', size: '-', description: 'Red Team, Blue Team, CTFs' },
        { name: 'web-development/', path: '/webdev', type: 'dir', date: '2023-11-22 14:30', size: '-', description: 'Frontend, Backend, DevOps' },
        { name: 'data-science/', path: '/datascience', type: 'dir', date: '2023-11-21 11:45', size: '-', description: 'ML, AI, Mathematics' },
        { name: 'competitive-coding/', path: '/competitive', type: 'dir', date: '2023-11-20 16:20', size: '-', description: 'Algorithms, Data Structures' },
        { name: 'README.txt', path: '#', type: 'file', date: '2023-11-23 12:00', size: '2KB', description: 'Welcome to CWDC Directory' },
    ];

    return <DirectoryTable items={items} parentLink={null} />;
};

export default Home;
