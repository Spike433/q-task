import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage (){
    return (
        <h1 style={{ color: '#333', fontFamily: 'Arial' }}>
        <Link to="/posts">Navigate to posts</Link>
        </h1>
    );
};