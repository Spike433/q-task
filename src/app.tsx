import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { paths } from './paths';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PostsPage } from './pages/Posts/Posts';
import { PostDetails } from './pages/Posts/PostDetails';

export function App() {
  return (
    <>
    <Helmet>
      <title>Q Task</title>
    </Helmet>      
      <Routes>
        {/* {paths.map(({ id, path, element}) => (
          <Route
            key={id}
            path={path}
            element={element}
          />
        ))} */}
        <Route path="/"
          element={<PostsPage/>} />
        
        <Route path='/posts/:postId'
          element={<PostDetails/>} />

        <Route path="*"
         element={<NotFoundPage/>} />
      </Routes>
  </>
  );
}
