import React from 'react';
import DirectoryTable from '../components/DirectoryTable';

const DataScience = () => {
    const items = [
        { name: 'machine-learning/', path: 'https://github.com/josephmisiti/awesome-machine-learning', type: 'dir', isExternal: true, date: '2025-11-23 11:00', size: '-', description: 'ML Frameworks & Libraries' },
        { name: 'deep-learning/', path: 'https://github.com/ChristosChristofidis/awesome-deep-learning', type: 'dir', isExternal: true, date: '2025-11-23 11:05', size: '-', description: 'Neural Networks & DL' },
        { name: 'artificial-intelligence/', path: 'https://github.com/owainlewis/awesome-artificial-intelligence', type: 'dir', isExternal: true, date: '2025-11-23 11:10', size: '-', description: 'General AI Resources' },
        { name: 'mathematics/', path: 'https://github.com/rossant/awesome-math', type: 'dir', isExternal: true, date: '2025-11-23 11:15', size: '-', description: 'Math for CS & Data Science' },
        { name: 'datasets.csv', path: 'https://github.com/awesomedata/awesome-public-datasets', type: 'file', isExternal: true, date: '2025-11-20 14:00', size: '500MB', description: 'Public Datasets Collection' },
    ];

    return <DirectoryTable items={items} parentLink="/" />;
};

export default DataScience;
