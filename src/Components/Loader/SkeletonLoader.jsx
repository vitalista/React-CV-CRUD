// SkeletonLoader.js
import React from 'react';

const SkeletonLoader = () => {
    const skeletonLoaderStyles = {
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
    };

    const skeletonElementStyles = {
        height: '20px',
        marginBottom: '10px',
        backgroundColor: '#ccc',
        borderRadius: '4px',
        position: 'relative',
        overflow: 'hidden',
    };

    const shimmerStyles = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-150%',
        height: '100%',
        width: '150%',
        background: 'linear-gradient(to right, #ccc 0%, #e0e0e0 50%, #ccc 100%)',
        animation: 'shimmer 1.5s infinite',
    };

    const skeletonHeaderStyles = {
        ...skeletonElementStyles,
        width: '100px',
        marginBottom: '30px',
    };

    const skeletonRowStyles = {
        ...skeletonElementStyles,
        width: '100%',
    };

    return (
        <>
            <style>
                {`
                    @keyframes shimmer {
                        0% {
                            transform: translateX(-150%);
                        }
                        100% {
                            transform: translateX(150%);
                        }
                    }
                `}
            </style>
            <div style={skeletonLoaderStyles}>
                <div style={skeletonHeaderStyles}>
                    <div style={shimmerStyles}></div>
                </div>
                <div style={skeletonRowStyles}>
                    <div style={shimmerStyles}></div>
                </div>
                <div style={skeletonRowStyles}>
                    <div style={shimmerStyles}></div>
                </div>
                <div style={skeletonRowStyles}>
                    <div style={shimmerStyles}></div>
                </div>
            </div>
        </>
    );
};

export default SkeletonLoader;
