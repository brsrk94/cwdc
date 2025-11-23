import React from 'react';

const FileViewer = ({ name, content }) => {
    return (
        <div style={{
            background: '#fff',
            color: '#000',
            padding: '2rem',
            borderRadius: '4px',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            maxWidth: '800px',
            margin: '2rem 0'
        }}>
            <h2 style={{
                borderBottom: '1px solid #ccc',
                paddingBottom: '0.5rem',
                marginBottom: '1rem',
                fontSize: '1.2rem'
            }}>
                Viewing: {name}
            </h2>
            <div>
                {Array.isArray(content) ? (
                    <ul style={{ paddingLeft: '1.5rem' }}>
                        {content.map((line, i) => (
                            <li key={i} style={{ marginBottom: '0.25rem' }}>{line}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

export default FileViewer;
