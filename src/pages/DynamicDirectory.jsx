import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import DirectoryTable from '../components/DirectoryTable';
import FileViewer from '../components/FileViewer';
import { resourceData } from '../data/resources';

// Helper to generate consistent fake sizes based on name
const getFakeSize = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    hash = Math.abs(hash);

    const unitType = hash % 10;
    if (unitType < 2) { // 20% chance of Bytes
        return (hash % 900 + 50) + ' B';
    } else if (unitType < 7) { // 50% chance of KB
        return (hash % 800 + 10) + ' KB';
    } else { // 30% chance of MB
        return ((hash % 100) / 10 + 0.5).toFixed(1) + ' MB';
    }
};

// Helper to generate consistent random date in 2025
const getFakeDate = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = ((hash << 5) - hash) + name.charCodeAt(i);
        hash |= 0;
    }
    hash = Math.abs(hash);

    const month = (hash % 12) + 1;
    const day = (hash % 28) + 1;
    const hour = hash % 24;
    const minute = hash % 60;

    const pad = (n) => n.toString().padStart(2, '0');
    return `2025-${pad(month)}-${pad(day)} ${pad(hour)}:${pad(minute)}`;
};

const DynamicDirectory = () => {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const { viewType, data, items, parentLink } = useMemo(() => {
        let current = resourceData;
        let parent = '/';

        // Root directory
        if (pathParts.length === 0) {
            const items = Object.keys(resourceData).map(key => ({
                name: `${key}/`,
                path: `/${key}`,
                type: 'dir',
                date: getFakeDate(key),
                size: '-',
                description: resourceData[key].description
            }));
            items.push({
                name: 'README.md',
                path: '/README.md',
                type: 'file',
                date: getFakeDate('README.md'),
                size: getFakeSize('README.md'),
                description: 'Welcome to CWDC Directory'
            });
            return { viewType: 'dir', items, parentLink: null };
        }

        // Handle README.md at root
        if (pathParts.length === 1 && pathParts[0] === 'README.md') {
            return {
                viewType: 'file',
                data: { name: 'README.md', content: 'Welcome to the CWDC Directory.\n\nNavigate through the folders to find resources on Cybersecurity, Web Development, Data Science, and Competitive Coding.' },
                parentLink: '/'
            };
        }

        // Traverse data
        for (let i = 0; i < pathParts.length; i++) {
            const part = pathParts[i];

            // Check for file extensions
            if (part.endsWith('.txt')) {
                const baseName = part.replace('.txt', '');
                // Check if previous 'current' has this as a skill/job
                if (baseName === 'skills' && current.skills) {
                    return {
                        viewType: 'file',
                        data: { name: part, content: current.skills },
                        parentLink: '/' + pathParts.slice(0, -1).join('/')
                    };
                }
                if (baseName === 'jobs' && current.jobs) {
                    return {
                        viewType: 'file',
                        data: { name: part, content: current.jobs },
                        parentLink: '/' + pathParts.slice(0, -1).join('/')
                    };
                }
            }

            if (current[part]) {
                current = current[part];
            } else if (current.topics && current.topics[part]) {
                current = current.topics[part];
            } else if (current.resources && current.resources[part]) {
                current = current.resources[part];
            } else {
                return { viewType: 'dir', items: [], parentLink: '/' }; // Not found
            }
        }

        // Determine parent link
        parent = '/' + pathParts.slice(0, -1).join('/');
        if (parent === '//') parent = '/';

        let items = [];

        // Generate items based on current data type
        if (Array.isArray(current)) {
            items = current.map((item) => {
                const name = typeof item === 'string' ? item : (item.title || item.name);
                if (typeof item === 'string') {
                    return {
                        name: item,
                        path: '#',
                        type: 'file',
                        date: getFakeDate(item),
                        size: getFakeSize(name),
                        description: ''
                    };
                }
                return {
                    name: name,
                    path: item.url,
                    type: 'file',
                    isExternal: true,
                    date: getFakeDate(name),
                    size: getFakeSize(name),
                    description: item.description || item.author || ''
                };
            });
        } else {
            // Topics
            if (current.topics) {
                Object.keys(current.topics).forEach(key => {
                    items.push({
                        name: `${key}/`,
                        path: `${location.pathname === '/' ? '' : location.pathname}/${key}`,
                        type: 'dir',
                        date: getFakeDate(key),
                        size: '-',
                        description: current.topics[key].description
                    });
                });
            }

            // Resources categories
            if (current.resources) {
                Object.keys(current.resources).forEach(key => {
                    items.push({
                        name: `${key}/`,
                        path: `${location.pathname === '/' ? '' : location.pathname}/${key}`,
                        type: 'dir',
                        date: getFakeDate(key),
                        size: '-',
                        description: `List of ${key}`
                    });
                });
            }

            // Skills/Jobs as files
            if (current.skills) {
                items.push({
                    name: 'skills.txt',
                    path: `${location.pathname === '/' ? '' : location.pathname}/skills.txt`,
                    type: 'file',
                    date: getFakeDate('skills.txt'),
                    size: getFakeSize('skills.txt'),
                    description: 'List of required skills'
                });
            }
            if (current.jobs) {
                items.push({
                    name: 'jobs.txt',
                    path: `${location.pathname === '/' ? '' : location.pathname}/jobs.txt`,
                    type: 'file',
                    date: getFakeDate('jobs.txt'),
                    size: getFakeSize('jobs.txt'),
                    description: 'Career opportunities'
                });
            }
        }

        return { viewType: 'dir', items, parentLink: parent };
    }, [location.pathname]);

    if (viewType === 'file') {
        return (
            <div>
                <div style={{ marginBottom: '1rem' }}>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>&larr; Back</a>
                </div>
                <FileViewer name={data.name} content={data.content} />
            </div>
        );
    }

    return <DirectoryTable items={items} parentLink={parentLink} />;
};

export default DynamicDirectory;
