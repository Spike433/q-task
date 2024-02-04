import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
    <Route path="/" 
    element={<div>Home</div>} />
    <Route path="/posts" 
    element={<div>Posts</div>} />
  </Routes>
  );
}
