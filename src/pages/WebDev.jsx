import React from 'react';
import DirectoryTable from '../components/DirectoryTable';

const WebDev = () => {
    const items = [
        { name: 'frontend/', path: 'https://github.com/dypsilon/frontend-dev-bookmarks', type: 'dir', isExternal: true, date: '2023-11-23 10:00', size: '-', description: 'HTML, CSS, JS, Frameworks' },
        { name: 'backend/', path: 'https://github.com/ripienaar/free-for-dev', type: 'dir', isExternal: true, date: '2023-11-23 10:05', size: '-', description: 'Server-side, Databases, APIs' },
        { name: 'devops/', path: 'https://github.com/n1trux/awesome-sysadmin', type: 'dir', isExternal: true, date: '2023-11-23 10:10', size: '-', description: 'Docker, K8s, CI/CD' },
        { name: 'fullstack-roadmap.pdf', path: 'https://roadmap.sh/full-stack', type: 'file', isExternal: true, date: '2023-11-21 08:00', size: '1.5MB', description: 'Full Stack Developer Roadmap' },
        { name: 'clean-code.txt', path: 'https://github.com/ryanmcdermott/clean-code-javascript', type: 'file', isExternal: true, date: '2023-11-20 12:00', size: '12KB', description: 'Clean Code Principles' },
    ];

    return <DirectoryTable items={items} parentLink="/" />;
};

export default WebDev;
