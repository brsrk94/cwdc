import React from 'react';
import DirectoryTable from '../components/DirectoryTable';

const Cybersecurity = () => {
    const items = [
        { name: 'red-team/', path: 'https://github.com/yeyintminthuhtut/Awesome-Red-Teaming', type: 'dir', isExternal: true, date: '2023-11-23 09:00', size: '-', description: 'Offensive Security Resources' },
        { name: 'blue-team/', path: 'https://github.com/fabacab/awesome-cybersecurity-blueteam', type: 'dir', isExternal: true, date: '2023-11-23 09:05', size: '-', description: 'Defensive Security Resources' },
        { name: 'purple-team/', path: 'https://github.com/mikemccrary/PurpleTeam', type: 'dir', isExternal: true, date: '2023-11-23 09:10', size: '-', description: 'Collaborative Security' },
        { name: 'books/', path: 'https://github.com/wtsxDev/Penetration-Testing/tree/master/Books', type: 'dir', isExternal: true, date: '2023-11-20 10:00', size: '-', description: 'Hacking Books Collection' },
        { name: 'ctf-reverse-engineering/', path: 'https://github.com/tylerha97/awesome-reversing', type: 'dir', isExternal: true, date: '2023-11-22 15:00', size: '-', description: 'Reverse Engineering Tools & Docs' },
        { name: 'ctf-binary-exploitation/', path: 'https://github.com/0xRadi/OWASP-Web-Checklist', type: 'dir', isExternal: true, date: '2023-11-22 15:05', size: '-', description: 'BinExp Resources' },
        { name: 'ctf-cryptography/', path: 'https://github.com/sobolevn/awesome-cryptography', type: 'dir', isExternal: true, date: '2023-11-22 15:10', size: '-', description: 'Crypto Challenges & Theory' },
        { name: 'ctf-osint/', path: 'https://github.com/jivoi/awesome-osint', type: 'dir', isExternal: true, date: '2023-11-22 15:15', size: '-', description: 'Open Source Intelligence' },
        { name: 'ctf-forensics/', path: 'https://github.com/Cen7/ctf-writeups', type: 'dir', isExternal: true, date: '2023-11-22 15:20', size: '-', description: 'Digital Forensics' },
        { name: 'ctf-web-exploitation/', path: 'https://github.com/wtsxDev/Penetration-Testing', type: 'dir', isExternal: true, date: '2023-11-22 15:25', size: '-', description: 'Web Sec Resources' },
    ];

    return <DirectoryTable items={items} parentLink="/" />;
};

export default Cybersecurity;
