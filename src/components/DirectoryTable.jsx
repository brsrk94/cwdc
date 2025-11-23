import React from 'react';
import { Link } from 'react-router-dom';

const DirectoryTable = ({ items, parentLink }) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th style={{ width: '20px' }}></th>
                        <th>Name</th>
                        <th className="date">Last modified</th>
                        <th className="size">Size</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {parentLink && (
                        <tr>
                            <td><span className="icon">📁</span></td>
                            <td><Link to={parentLink}>..</Link></td>
                            <td className="date">-</td>
                            <td className="size">-</td>
                            <td>Parent Directory</td>
                        </tr>
                    )}
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <span className="icon">
                                    {item.type === 'dir' ? '📁' : item.type === 'file' ? '📄' : '🔗'}
                                </span>
                            </td>
                            <td>
                                {item.isExternal ? (
                                    <a href={item.path} target="_blank" rel="noopener noreferrer">{item.name}</a>
                                ) : (
                                    <Link to={item.path}>{item.name}</Link>
                                )}
                            </td>
                            <td className="date">{item.date || '2025-11-23 10:00'}</td>
                            <td className="size">{item.size || '-'}</td>
                            <td style={{ color: '#aaa' }}>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DirectoryTable;
