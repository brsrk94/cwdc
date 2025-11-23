import React from 'react';
import DirectoryTable from '../components/DirectoryTable';

const CompetitiveCoding = () => {
    const items = [
        { name: 'algorithms/', path: 'https://github.com/TheAlgorithms/Python', type: 'dir', isExternal: true, date: '2025-11-23 12:00', size: '-', description: 'Standard Algorithms Implementation' },
        { name: 'data-structures/', path: 'https://github.com/raywenderlich/swift-algorithm-club', type: 'dir', isExternal: true, date: '2025-11-23 12:05', size: '-', description: 'DS Explanations & Code' },
        { name: 'platforms/', path: 'https://github.com/lnishan/awesome-competitive-programming', type: 'dir', isExternal: true, date: '2025-11-23 12:10', size: '-', description: 'CP Platforms & Tools' },
        { name: 'cp-handbook.pdf', path: 'https://cses.fi/book/book.pdf', type: 'file', isExternal: true, date: '2025-11-19 09:00', size: '3MB', description: 'Competitive Programmer\'s Handbook' },
        { name: 'leetcode-patterns.txt', path: 'https://github.com/seanprashad/leetcode-patterns', type: 'file', isExternal: true, date: '2025-11-18 16:00', size: '15KB', description: 'Patterns for LeetCode Problems' },
    ];

    return <DirectoryTable items={items} parentLink="/" />;
};

export default CompetitiveCoding;
