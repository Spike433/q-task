import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';

export function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <div>Test</div>
    </React.Fragment>
  );
}
